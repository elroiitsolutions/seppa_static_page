<?php
// Disable default MySQLi error throwing first so we return clean JSON instead of blank 500 pages
error_reporting(0);
ini_set('display_errors', '0');
mysqli_report(MYSQLI_REPORT_OFF);

// Enable CORS and JSON headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Database Credentials (Hostinger Live)
$username = "u594292727_new_seppa";
$password = "Seppa@2026";
$dbname   = "u594292727_new_seppa_enq";

try {
    // 1. Try connecting via localhost, fallback to 127.0.0.1
    $conn = @new mysqli("localhost", $username, $password, $dbname);
    if ($conn->connect_error) {
        $conn = @new mysqli("127.0.0.1", $username, $password, $dbname);
    }
    
    // Fallback to legacy database if new one fails
    if ($conn->connect_error) {
        $conn = @new mysqli("localhost", "u594292727_solution_sep", "Seppa@2026", "u594292727_seppa_enquiry");
    }

    if ($conn->connect_error) {
        http_response_code(200);
        echo json_encode([
            "success" => false,
            "error" => "Database connection failed: " . $conn->connect_error
        ]);
        exit;
    }
    
    $conn->set_charset("utf8mb4");

    // 2. Read Incoming Data (Supports both JSON payloads and Form Data)
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    if (!$data || !is_array($data)) {
        $data = $_POST;
    }

    $form_type = isset($data['form_type']) ? trim(strtolower($data['form_type'])) : 'product';

    // 3. Auto-Create Tables if they don't exist yet
    $create_tables_sql = [
        // 1. scroll_enquiries
        "scroll_enquiries" => "CREATE TABLE IF NOT EXISTS scroll_enquiries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) DEFAULT NULL,
            phone_number VARCHAR(50) DEFAULT NULL,
            country VARCHAR(255) DEFAULT NULL,
            city VARCHAR(255) DEFAULT NULL,
            message TEXT DEFAULT NULL,
            page_url VARCHAR(255) DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",

        // 2. contact_enquiries
        "contact_enquiries" => "CREATE TABLE IF NOT EXISTS contact_enquiries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            phone_number VARCHAR(50) DEFAULT NULL,
            location VARCHAR(255) DEFAULT NULL,
            message TEXT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",

        // 3. dealers_enquiries
        "dealers_enquiries" => "CREATE TABLE IF NOT EXISTS dealers_enquiries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) DEFAULT NULL,
            company_name VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            phone_number VARCHAR(50) DEFAULT NULL,
            proposed_dealership_region VARCHAR(255) DEFAULT NULL,
            business_proposal TEXT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",

        // 4. investors_enquiries
        "investors_enquiries" => "CREATE TABLE IF NOT EXISTS investors_enquiries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            phone_number VARCHAR(50) DEFAULT NULL,
            investment_interest VARCHAR(255) DEFAULT NULL,
            message TEXT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",

        // 5. product_enquiries
        "product_enquiries" => "CREATE TABLE IF NOT EXISTS product_enquiries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            phone_number VARCHAR(50) DEFAULT NULL,
            location_country VARCHAR(255) DEFAULT NULL,
            product_interest VARCHAR(255) DEFAULT NULL,
            project_requirement TEXT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"
    ];

    foreach ($create_tables_sql as $table_name => $sql) {
        $conn->query($sql);
    }

    // Helper to safely add a column if it doesn't exist yet
    $ensureColumn = function($conn, $table, $column, $definition) {
        $check = $conn->query("SHOW COLUMNS FROM `$table` LIKE '$column'");
        if ($check && $check->num_rows === 0) {
            $conn->query("ALTER TABLE `$table` ADD COLUMN `$column` $definition");
        }
    };

    // Ensure new columns exist on old tables
    $ensureColumn($conn, 'scroll_enquiries', 'full_name', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'scroll_enquiries', 'phone_number', 'VARCHAR(50) DEFAULT NULL');
    $ensureColumn($conn, 'scroll_enquiries', 'country', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'scroll_enquiries', 'city', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'scroll_enquiries', 'page_url', 'VARCHAR(255) DEFAULT NULL');

    $ensureColumn($conn, 'contact_enquiries', 'full_name', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'contact_enquiries', 'phone_number', 'VARCHAR(50) DEFAULT NULL');
    $ensureColumn($conn, 'contact_enquiries', 'location', 'VARCHAR(255) DEFAULT NULL');

    $ensureColumn($conn, 'dealers_enquiries', 'full_name', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'dealers_enquiries', 'phone_number', 'VARCHAR(50) DEFAULT NULL');
    $ensureColumn($conn, 'dealers_enquiries', 'proposed_dealership_region', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'dealers_enquiries', 'business_proposal', 'TEXT DEFAULT NULL');

    $ensureColumn($conn, 'investors_enquiries', 'full_name', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'investors_enquiries', 'phone_number', 'VARCHAR(50) DEFAULT NULL');
    $ensureColumn($conn, 'investors_enquiries', 'investment_interest', 'VARCHAR(255) DEFAULT NULL');

    $ensureColumn($conn, 'product_enquiries', 'full_name', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'product_enquiries', 'phone_number', 'VARCHAR(50) DEFAULT NULL');
    $ensureColumn($conn, 'product_enquiries', 'location_country', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'product_enquiries', 'product_interest', 'VARCHAR(255) DEFAULT NULL');
    $ensureColumn($conn, 'product_enquiries', 'project_requirement', 'TEXT DEFAULT NULL');

    // 4. Insert data into the appropriate table
    if ($form_type === 'scroll') {
        $stmt = $conn->prepare("INSERT INTO scroll_enquiries (full_name, phone_number, country, city, message, page_url) VALUES (?, ?, ?, ?, ?, ?)");
        $full_name = $data['full_name'] ?? ($data['name'] ?? '');
        $phone_number = $data['phone_number'] ?? ($data['phone'] ?? '');
        $country = $data['country'] ?? ($data['location'] ?? '');
        $city = $data['city'] ?? '';
        $message = $data['message'] ?? '';
        $page_url = $data['page_url'] ?? '';
        if ($stmt) $stmt->bind_param("ssssss", $full_name, $phone_number, $country, $city, $message, $page_url);

    } elseif ($form_type === 'contact') {
        $stmt = $conn->prepare("INSERT INTO contact_enquiries (full_name, email, phone_number, location, message) VALUES (?, ?, ?, ?, ?)");
        $full_name = $data['full_name'] ?? ($data['name'] ?? ($data['first_name'] ?? ''));
        $email = $data['email'] ?? '';
        $phone_number = $data['phone_number'] ?? ($data['phone'] ?? '');
        $location = $data['location'] ?? ($data['country'] ?? '');
        $message = $data['message'] ?? '';
        if ($stmt) $stmt->bind_param("sssss", $full_name, $email, $phone_number, $location, $message);

    } elseif ($form_type === 'dealer' || $form_type === 'dealers') {
        $stmt = $conn->prepare("INSERT INTO dealers_enquiries (full_name, company_name, email, phone_number, proposed_dealership_region, business_proposal) VALUES (?, ?, ?, ?, ?, ?)");
        $full_name = $data['full_name'] ?? ($data['name'] ?? ($data['contact_person'] ?? ''));
        $company_name = $data['company_name'] ?? ($data['company'] ?? '');
        $email = $data['email'] ?? '';
        $phone_number = $data['phone_number'] ?? ($data['phone'] ?? '');
        $proposed_dealership_region = $data['proposed_dealership_region'] ?? ($data['region'] ?? ($data['country'] ?? ''));
        $business_proposal = $data['business_proposal'] ?? ($data['proposal'] ?? ($data['message'] ?? ''));
        if ($stmt) $stmt->bind_param("ssssss", $full_name, $company_name, $email, $phone_number, $proposed_dealership_region, $business_proposal);

    } elseif ($form_type === 'investor' || $form_type === 'investors') {
        $stmt = $conn->prepare("INSERT INTO investors_enquiries (full_name, email, phone_number, investment_interest, message) VALUES (?, ?, ?, ?, ?)");
        $full_name = $data['full_name'] ?? ($data['name'] ?? '');
        $email = $data['email'] ?? '';
        $phone_number = $data['phone_number'] ?? ($data['phone'] ?? '');
        $investment_interest = $data['investment_interest'] ?? ($data['interest'] ?? ($data['investment_range'] ?? ''));
        $message = $data['message'] ?? '';
        if ($stmt) $stmt->bind_param("sssss", $full_name, $email, $phone_number, $investment_interest, $message);

    } else {
        // Default: Product / Packaging / Equipment Enquiry
        $stmt = $conn->prepare("INSERT INTO product_enquiries (full_name, email, phone_number, location_country, product_interest, project_requirement) VALUES (?, ?, ?, ?, ?, ?)");
        $full_name = $data['full_name'] ?? ($data['name'] ?? '');
        $email = $data['email'] ?? '';
        $phone_number = $data['phone_number'] ?? ($data['phone'] ?? '');
        $location_country = $data['location_country'] ?? ($data['location'] ?? ($data['country'] ?? ''));
        $product_interest = $data['product_interest'] ?? ($data['product'] ?? ($data['product_name'] ?? 'General Enquiry'));
        $project_requirement = $data['project_requirement'] ?? ($data['message'] ?? '');
        if ($stmt) $stmt->bind_param("ssssss", $full_name, $email, $phone_number, $location_country, $product_interest, $project_requirement);
    }

    if ($stmt && $stmt->execute()) {
        // Send email notification to sales@elroiitsolutions.com
        try {
            // Prepare email data based on form type
            $email_fields = [];
            if ($form_type === 'scroll') {
                $email_fields = [
                    "Form Type" => "Scroll/Modal Enquiry",
                    "Name" => $full_name,
                    "Phone Number" => $phone_number,
                    "Country" => $country,
                    "City" => $city,
                    "Message" => $message,
                    "Page URL" => $page_url
                ];
            } elseif ($form_type === 'contact') {
                $email_fields = [
                    "Form Type" => "Contact Us Enquiry",
                    "Name" => $full_name,
                    "Email" => $email,
                    "Phone Number" => $phone_number,
                    "Location" => $location,
                    "Message" => $message
                ];
            } elseif ($form_type === 'dealer' || $form_type === 'dealers') {
                $email_fields = [
                    "Form Type" => "Dealers Enquiry",
                    "Name" => $full_name,
                    "Company Name" => $company_name,
                    "Email" => $email,
                    "Phone Number" => $phone_number,
                    "Proposed Dealership Region" => $proposed_dealership_region,
                    "Business Proposal" => $business_proposal
                ];
            } elseif ($form_type === 'investor' || $form_type === 'investors') {
                $email_fields = [
                    "Form Type" => "Investors Enquiry",
                    "Name" => $full_name,
                    "Email" => $email,
                    "Phone Number" => $phone_number,
                    "Investment Interest" => $investment_interest,
                    "Message" => $message
                ];
            } else {
                $email_fields = [
                    "Form Type" => "Product / Equipment Enquiry",
                    "Name" => $full_name,
                    "Email" => $email,
                    "Phone Number" => $phone_number,
                    "Location/Country" => $location_country,
                    "Product/Service Interest" => $product_interest,
                    "Project Requirement" => $project_requirement
                ];
            }

            // Construct email headers
            $to = "rameshkumar25.work@gmail.com";
            $subject = "New " . ($email_fields['Form Type'] ?? 'Enquiry') . " from " . $full_name;
            
            $headers = [];
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            
            // Set dynamic From header based on server domain to minimize spam flags
            $domain = $_SERVER['HTTP_HOST'] ?? 'seppa.com';
            // strip port if present (e.g. localhost:3000)
            if (($pos = strpos($domain, ':')) !== false) {
                $domain = substr($domain, 0, $pos);
            }
            $headers[] = 'From: SEPPA Website <no-reply@' . $domain . '>';
            
            // Set Reply-To if email is provided
            $sender_email = $email ?? '';
            if (!empty($sender_email)) {
                $headers[] = 'Reply-To: ' . $full_name . ' <' . $sender_email . '>';
            }

            // Construct clean HTML email body
            $email_html = "
            <html>
            <head>
                <title>" . htmlspecialchars($subject) . "</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    table { width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 20px; }
                    th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
                    th { background-color: #f4f4f4; width: 35%; }
                    .header { background: #004d80; color: white; padding: 15px; text-align: center; border-radius: 4px 4px 0 0; max-width: 600px; }
                    .content { padding: 20px 0; }
                </style>
            </head>
            <body>
                <div class='header'>
                    <h2>New Website Enquiry</h2>
                </div>
                <div class='content'>
                    <p>A new enquiry has been submitted on the website. Below are the details:</p>
                    <table>";
                    
            foreach ($email_fields as $label => $value) {
                if ($value !== null && $value !== '') {
                    $email_html .= "<tr><th>" . htmlspecialchars($label) . "</th><td>" . nl2br(htmlspecialchars($value)) . "</td></tr>";
                }
            }
            
            $email_html .= "
                    </table>
                    <p style='margin-top: 30px; font-size: 12px; color: #777;'>This notification was automatically sent by the SEPPA web server.</p>
                </div>
            </body>
            </html>";

            // Send mail
            @mail($to, $subject, $email_html, implode("\r\n", $headers));
        } catch (Throwable $mail_err) {
            // Log/ignore mail errors so it doesn't break the client's success response
        }

        http_response_code(200);
        echo json_encode([
            "success" => true,
            "message" => "Enquiry submitted successfully!"
        ]);
    } else {
        http_response_code(200);
        echo json_encode([
            "success" => false,
            "error" => "Insert failed: " . ($stmt ? $stmt->error : $conn->error)
        ]);
    }

    if ($stmt) $stmt->close();
    $conn->close();

} catch (Throwable $e) {
    http_response_code(200);
    echo json_encode([
        "success" => false,
        "error" => "PHP Error: " . $e->getMessage()
    ]);
}

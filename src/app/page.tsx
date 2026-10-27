import React from 'react';

export const metadata = {
  title: "Seppa Solutions | Beverage Processing, PET Bottling & Packaging Machinery",
  description: "Global manufacturer of complete beverage bottling lines, PET blow moulding machines, water treatment plants, and end-of-line packaging automation systems.",
  keywords: "beverage processing, bottling lines, PET blow moulding machines, water treatment plant, liquid packaging automation, Seppa Solutions",
};

import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/en');
}

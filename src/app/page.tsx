import React from 'react';

export const metadata = {
  title: "seppa solutions.com",
  description: "Crafting quality textiles for global industries. We combine eco-friendly processes, responsible sourcing & advanced technology to deliver sustainable textiles.",
  keywords: "textile, manufacturing, fabric, sustainable, yarn, custom textiles",
};

import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/en');
}

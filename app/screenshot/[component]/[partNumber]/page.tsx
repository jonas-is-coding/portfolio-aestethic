"use client"

import { usePathname } from 'next/navigation';
import Figma_Tip from '@/components/content/figma_tip';
import VSCode_Tip from '@/components/content/vscode_tip';
import Other_Tip from '@/components/content/other_tip';

const ScreenshotPage = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const component = pathParts[2]; // 'Figma_Tip', 'VSCode_Tip', or 'Other_Tip'
  const value = pathParts[3]; // either 'partNumber' or 'title'

  let ComponentToRender = null;
  let props: any = {};

  switch (component) {
    case 'Figma_Tip':
      ComponentToRender = Figma_Tip;
      props = { partNumber: parseInt(value, 10) };
      break;
    case 'VSCode_Tip':
      ComponentToRender = VSCode_Tip;
      props = { partNumber: parseInt(value, 10) };
      break;
    case 'Other_Tip':
      ComponentToRender = Other_Tip;
      props = { title: value };
      break;
    default:
      return <div>Invalid component</div>;
  }

  return ComponentToRender ? (
    <ComponentToRender {...props} />
  ) : null;
};

export default ScreenshotPage;
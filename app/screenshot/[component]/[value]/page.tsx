"use client"

import { usePathname } from 'next/navigation';
import Figma_Tip from '@/components/content/figma_tip';
import VSCode_Tip from '@/components/content/vscode_tip';
import Other_Tip from '@/components/content/other_tip';

const ScreenshotPage = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const component = pathParts[2];
  const value = pathParts.slice(3).join('/');

  let ComponentToRender: React.FC<any> | null = null;
  let props: any = {};

  switch (component) {
    case 'Figma_Tip':
    case 'VSCode_Tip':
      ComponentToRender = component === 'Figma_Tip' ? Figma_Tip : VSCode_Tip;
      props = { partNumber: parseInt(value, 10) };
      break;
    case 'Other_Tip':
      ComponentToRender = Other_Tip;
      props = { title: decodeURIComponent(value) };
      break;
    default:
      return <div>Invalid component</div>;
  }

  return ComponentToRender ? (
    <ComponentToRender {...props} />
  ) : null;
};

export default ScreenshotPage;
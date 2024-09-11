import { useRouter } from 'next/router';
import Figma_Tip from '@/components/content/figma_tip';
import VSCode_Tip from '@/components/content/vscode_tip';
import Other_Tip from '@/components/content/other_tip';

const ScreenshotPage = () => {
  const router = useRouter();
  const { component, partNumber } = router.query;

  let ComponentToRender = null;

  switch (component) {
    case 'Figma_Tip':
      ComponentToRender = Figma_Tip;
      break;
    case 'VSCode_Tip':
      ComponentToRender = VSCode_Tip;
      break;
    case 'Other_Tip':
      ComponentToRender = Other_Tip;
      break;
    default:
      return <div>Invalid component</div>;
  }

  return ComponentToRender ? (
    <ComponentToRender partNumber={parseInt(partNumber as string, 10)} />
  ) : null;
};

export default ScreenshotPage;
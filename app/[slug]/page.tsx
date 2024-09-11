import { getPageBySlug } from "@/lib/slug";

const Page = ({ params }: { params: { slug: string } }) => {
  const Component = getPageBySlug(params.slug);
  
  return (
      <main className="flex min-h-screen px-5 pt-32">
          <Component />
      </main>
  );
};

export default Page;
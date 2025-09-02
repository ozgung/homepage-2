import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { MediumComponent } from "app/components/medium";
import { SubstackComponent } from "app/components/substack";

interface BlogSectionProps {
  showHeading?: boolean;
  maxPosts?: number;
  showEmbeds?: boolean;
  isMainPage?: boolean;
}

export function BlogSection({
  showHeading = true,
  maxPosts,
  showEmbeds = true,
  isMainPage = false
}: BlogSectionProps) {
  let allBlogs = getBlogPosts();

  return (
    <section>
      {showHeading && (
        isMainPage ? (
          <h2 className="mb-8 text-xl font-semibold text-blue-900 dark:text-blue-200">My Blog Posts</h2>
        ) : (
          <h1 className="mb-8 text-2xl font-medium text-blue-900 dark:text-blue-200">My Blog Posts</h1>
        )
      )}

      {showEmbeds && (
        <>
          {/* New Substack Embed Section */}
          <div className="mb-12">
            <SubstackComponent
              url="https://open.substack.com/pub/ozgungenc/p/the-bubble?r=bynn3&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
              title="The Bubble"
              description="Is AI a Bubble? Three Definitions and a Look at Hype vs. Reality"
            />
          </div>
          {/* New Medium Embed Section
          <div className="mb-12">
            <MediumComponent
              url="https://medium.com/@ozgungenc/balon-35df1f6a9cd5"
              description="Yapay zeka bir balon mu?"
              title="Balon"
            />
          </div> */}

          {/* Substack Embed Section */}
          <div className="mb-12">
            <SubstackComponent
              url="https://open.substack.com/pub/ozgungenc/p/neural-graphics-neuralangelo"
              description="Exploring Neural Graphics methods"
              title="Neural Surface Reconstruction using Neuralangelo"
            />
          </div>

          

          {/* Medium Embed Section */}
          <div className="mb-12">
            <MediumComponent
              url="https://medium.com/turkce/keras-ile-derin-öğrenmeye-giriş-40e13c249ea8"
              title="Keras ile Derin Öğrenmeye Giriş"
            />
          </div>
        </>
      )}

      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .slice(0, maxPosts) // Limit posts if maxPosts is specified
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

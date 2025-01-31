/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

interface Post {
    id: number;
    date: string;
    title: {
        rendered: string;
    };
    slug: string;
    excerpt: {
        rendered: string;
    };
    link: string;
    author: string;
    _embedded: any;
    content: {
        rendered: string;
    };
}

interface RuntimeConfig {
  public: {
    wpUri: string;
  }
}

export default () => {
  const config = useRuntimeConfig() as RuntimeConfig;
  const WP_URL = config.public.wpUri;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
  };

  const getPosts = async (
    category?: number,
    page: number = 1,
    perPage: number = 20,
    fields: string = "id,slug,title,excerpt,date,modified,author,categories,tags,content,featured_media,link"
  ) => {
    let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<Post[]>(query);
  };

  const getPost = async (slug: string) => {
    return get<Post[]>(`posts?slug=${slug}&_embed=1`);
  };

  const getCatgories = async (fields: string = "name,slug,count") => {
    return get<any>(`categories`);
  };

  const getCatgory = async (slug: string) => {
    return get<any>(`categories?slug=${slug}`);
  };

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
  };
};
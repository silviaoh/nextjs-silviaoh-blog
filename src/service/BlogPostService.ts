import axiosInterceptor from '../utils/axiosInterceptor';

/**
 * - 블로그 전체 글 목록 가져오기 - content 뺀거
 * - 블로그 상세 내용 가져오기
 */
class BlogPostService {
  async getListOfBlogPosts() {
    return await axiosInterceptor({ method: 'get', url: '/posts' });
  }

  async getListOfFilteredBlogPosts(categoryName: string) {
    return await axiosInterceptor({
      method: 'get',
      url: `/posts/${categoryName}`,
    });
  }

  async getBlogPost(title: string) {
    return await axiosInterceptor({
      method: 'get',
      url: `/post/${title}`,
    });
  }

  async getCategoryMenu() {
    return await axiosInterceptor({ method: 'get', url: '/category' });
  }
}

export default BlogPostService;

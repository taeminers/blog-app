import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div>나의 글</div>
      </div>
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">Kyle</div>
                <div className="post__date">2025.03.24 Monday</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veritatis asperiores fugiat excepturi non at perferendis unde?
                Temporibus quas officia aspernatur a illo, cum odio porro
                repellendus, rem maxime laborum. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Officiis a neque nostrum
                voluptates accusantium consequuntur unde vero provident
                blanditiis itaque, hic, nihil excepturi veniam error quibusdam
                est laboriosam fuga ipsum?
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

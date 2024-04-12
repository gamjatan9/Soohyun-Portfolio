export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <p className="title">Let's work together!</p>
        <p className="send-email">이메일 보내기</p>
        <a href="mailto:soo000307@egmail.com">soo000307@gmail.com</a>
        <div className="more">
          <div className="item">
            <span className="text">PHONE</span>
            <a href="tel:010-0000-0000" className="text-hover">
              010-4160-7656
            </a>
          </div>
          <div className="item">
            <span className="text">GITHUB</span>
            <a href="https://github.com/gamjatan9" className="text-hover">
              github.com/gamjatan9
            </a>
          </div>
          <div className="item">
            <span className="text">BLOG</span>
            <a href="https://mystory-soo.tistory.com/" className="text-hover">
              mystory-soo.tistory.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

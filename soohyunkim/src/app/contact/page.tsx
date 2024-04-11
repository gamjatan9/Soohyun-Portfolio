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
              010-0000-0000
            </a>
          </div>
          <div className="item">GITHUB</div>
          <div className="item">BLOG</div>
        </div>
      </div>
    </div>
  );
}

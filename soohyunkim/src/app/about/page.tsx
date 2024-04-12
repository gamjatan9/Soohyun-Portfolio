import { Profile } from '../../../public/images';

export default function About() {
  return (
    <div className="about">
      <div className="border-line"></div>
      <div className="main-content">
        <div className="profile-container">
          <div className="profile"></div>
        </div>
        <div className="nav-bar">
          <div className="nav">
            <a href="#about">ABOUT</a>
            <a href="#education">EDUCATION</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#awards">AWARDS</a>
            <a href="#skills">SKILLS</a>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

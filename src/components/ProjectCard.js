import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {

  const openProj = () => {
    window.open(url, "_blank")
  }
  return (
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx" onClick={openProj}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 className="proj-title">{title}</h4>
          <span className="proj-descp">{description}</span>
        </div>
      </div>
    </Col>
  )
}
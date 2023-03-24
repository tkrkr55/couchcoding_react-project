import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kim Hye In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>안녕하세요 프론트 엔드 개발자 취업준비생 김혜인 입니다.😊</h4>
        <p>
          <h5>카우치코딩 사전 과제 포토카드 프로젝트 입니다. <br/>
            Unsplash Api 를 이용하였고 axios를 통해 데이터를 가져왔습니다. <br/>
            디자인은 tailwind 와 react-bootstrap , font 프리텐다드 를 사용 했습니다. <br></br>
            
          </h5>
          <div>email : tkrkr55@naver.com</div>
          <p>phon-number : 010-7485-3707</p>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default function MyModal() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Button variant="dark" onClick={() => setModalShow(true)}>
      My Profil
    </Button>

    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>
  )
}

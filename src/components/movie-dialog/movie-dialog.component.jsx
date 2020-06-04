import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import DigitalCard from '/components/digital-card/digital-card.component';
import './movie-dialog.styles';

const MovieDialog = ({open, show, movie}) => {

    return (
        <Modal
            show={open}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={()=>show(false)}
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <DigitalCard movie={movie}/>
            </Modal.Body>
            <Modal.Footer>
            <Button className="dialog-inverted-btn" >Watch Offline</Button>
            <Button >Watch Online</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MovieDialog;
import React, { Component } from 'react';

import Modal from '@material-ui/core/Modal/Modal';

class BasicModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    open={this.props.show}
                    onClose={this.props.close}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}

export default BasicModal





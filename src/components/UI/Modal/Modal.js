import { Component } from 'react';
import Button from '../Button/Button.js';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

class Backdrop extends Component {
	render() {
		return (
			<div className={classes.backdrop} onClick={this.props.onClick}/>
		);
	};
}

class ModalOverlay extends Component {
	render() {
		return (
			<div className={classes.modal}>
				<h1>{this.props.title}</h1>
				<h2>
					{this.props.children}
				</h2>
				<Button onClick={this.props.onClick}>Ок</Button>
			</div>
		);
	};
}

const portalElement = document.getElementById('overlays');

class Modal extends Component {
	render() {
		return (
			<>
				{createPortal(<Backdrop onClick={this.props.onClose}/>, portalElement)}
				{createPortal(<ModalOverlay
					onClick={this.props.onClose}
					title={this.props.title}>
					{this.props.children}
				</ModalOverlay>, portalElement)}
			</>
		);
	};
}

export default Modal;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default class From extends Component {
    state = {
        open: false,
        text: ""
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (e) => {
        const newText = e.target.value
        this.setState({ text: newText })
    }

    onButtonClick = () => {
        if(this.state.text.length !== 0) {
            this.props.submit(this.state.text)
            this.setState({ text: "" })
            this.handleClose()
        }
    }


    render() {

        const { text } = this.state

        return (
            <div style={{padding: 30}}>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen} style={{width: "100%"}}>
                    Add something new
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth 
                >
                    <DialogTitle>Todo List</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add anything you need to do
                        </DialogContentText>
                        <div style={{paddingTop: 20}}>
                            <TextField
                                label="Todo.."
                                fullWidth
                                value={text}
                                onChange={this.handleChange}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.onButtonClick} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
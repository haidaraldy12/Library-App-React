// import React, { useState } from 'react';

// function NoteInput({ addNote }) {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [charLimit, setCharLimit] = useState(50);

//   const onTitleChangeEventHandler = (event) => {
//     const limit = 50;
//     const inputTitle = event.target.value;

//     if (inputTitle.length <= limit) {
//       setTitle(inputTitle);
//       setCharLimit(limit - inputTitle.length);
//     }
//   };

//   const onBodyChangeEventHandler = (event) => {
//     setBody(event.target.value);
//   };

//   const onSubmitEventHandler = (event) => {
//     event.preventDefault();
//     addNote({ title, body });
//     setTitle('');
//     setBody('');
//   };

//   return (
//     <div className="note-input">
//       <form onSubmit={onSubmitEventHandler}>
//         <input
//           type="text"
//           placeholder="Ini adalah judul..."
//           value={title}
//           onChange={onTitleChangeEventHandler}
//           required
//         />
//         <p className="note-input__title__char-limit">Sisa karakter: {charLimit}</p>
//         <textarea
//           placeholder="Tuliskan catatanmu di sini ..."
//           value={body}
//           onChange={onBodyChangeEventHandler}
//           required
//         />
//         <button type="submit">Buat</button>
//       </form>
//     </div>
//   );
// }

// export default NoteInput;

import React, { Component } from 'react';

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };

    // Binding event handlers
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const limit = 50;
    const inputTitle = event.target.value;

    if (inputTitle.length <= limit) {
      this.setState({
        title: inputTitle,
        charLimit: limit - inputTitle.length,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;

    // Memanggil fungsi addNote yang diterima dari props
    this.props.addNote({ title, body });

    // Reset input setelah submit
    this.setState({
      title: '',
      body: '',
      charLimit: 50,
    });
  }

  render() {
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Ini adalah judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.charLimit}
          </p>
          <textarea
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;

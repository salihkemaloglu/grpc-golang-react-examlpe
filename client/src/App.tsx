import * as React from 'react';
import './App.css';
import { grpc } from 'grpc-web-client';
import { BlogService } from './proto/greet_pb_service';
import { HelloRequest, Chunk, LongGreetRequest, HelloResponse } from './proto/greet_pb';
import logo from './logo.svg';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class App extends React.Component {

  state = {
    files: [],
    fileName: '',
    ipfsHash: '',
    maxMsgSize : 1024 * 1024 * 20
  };


  // ipfs = ipfsClient('/ip4/127.0.0.1/tcp/5001')
  onDrop = (_acceptedFiles: any, _rejectedFiles: any) => {

    var reader = new FileReader();
    reader.onload = () => {
      var arrayBuffer = reader.result;
      this.setState({ fileName: _acceptedFiles[0].name, files: arrayBuffer });
    };
    reader.readAsArrayBuffer(_acceptedFiles[0]);
  }

  saveToIpfsWithFilename() {
    console.log("")
  }
  handleFormSubmit() {
    const req = new HelloRequest();
    req.setName('MR.Ga');
    grpc.invoke(BlogService.SayHello, {
      request: req,
      host: 'http://dev-rr.gignox.com:8902',
      onMessage: (message: HelloResponse) => {
        console.log('getBook.onEnd.message', message.getMessage());
        alert(message.getMessage())
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code === grpc.Code.OK) {
          console.log('all ok');
        } else {
          console.log('hit an error', code, msg, trailers);
        }
      }
    });
  }
  fileUploadHandler = async () => {
    const req = new Chunk();
    const buffer = Buffer.from(this.state.files)
    console.log(buffer);
    var sent = new Buffer(buffer);
    console.log(sent);
    req.setContent(sent);

    const client = grpc.client(BlogService.Upload, {
      host: "http://localhost:8900",
    });
    client.onHeaders((headers: grpc.Metadata) => {
      console.log("onHeaders", headers);
    });
    client.onMessage((message: any) => {
      console.log("onMessage", message);
    });
    client.onEnd((status: grpc.Code, statusMessage: string, trailers: grpc.Metadata) => {
      console.log("onEnd", status, statusMessage, trailers);
    });

    client.start(new grpc.Metadata({ "HeaderTestKey1": "ClientValue1" }));
    client.send(req);
    client.finishSend(); // included for completeness, but likely unnecessary as the request is unary

  }
  UploadHandler = async () => {
    const req = new LongGreetRequest();
    const buffer = Buffer.from(this.state.files)
    req.setGreeting(buffer);

    const client = grpc.client(BlogService.LongGreet, {
      host: "http://localhost:8900",
    });
    client.onHeaders((headers: grpc.Metadata) => {
      console.log("onHeaders", headers);
    });
    client.onMessage((message: any) => {
      console.log("onMessage", message);
    });
    client.onEnd((status: grpc.Code, statusMessage: string, trailers: grpc.Metadata) => {
      console.log("onEnd", status, statusMessage, trailers);
    });

    client.start(new grpc.Metadata({ "HeaderTestKey1": "ClientValue1" }));
    client.send(req);
    client.finishSend(); // included for completeness, but likely unnecessary as the request is unary

  }
  getBook() {
    const host = 'http://localhost:8900';
    const getBookRequest = new HelloRequest();
    getBookRequest.setName("60929871");
    grpc.unary(BlogService.SayHello, {
      request: getBookRequest,
      host: host,
      metadata: new grpc.Metadata({"authorization": "this is bearier token"}),
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        console.log('getBook.onEnd.status', status, statusMessage);
        console.log('getBook.onEnd.headers', headers);
        if (status === grpc.Code.OK && message) {
          console.log('getBook.onEnd.message', message.toObject());
        }
        console.log('getBook.onEnd.trailers', trailers);
      }
    });
    
  }
  captureFile(event: any) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      var currentUser = reader.result === null ? JSON.parse("userJson") : reader.result;
      var ss = new Buffer(currentUser);
      console.log('buffer', ss)
      this.setState({ fileName: "_acceptedFiles[0].name", files: ss });
      console.log('buffer', this.state.files)
    }
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleFormSubmit}>Say hallo</button>
        <button onClick={this.getBook}>getBook</button>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            );
          }}
        </Dropzone>
        <form  >
          <input type='file' onChange={this.captureFile} />
          <input type='submit' />
        </form>
        <button onClick={this.handleFormSubmit} color="primary">say hello</button>
        <button onClick={this.getBook} color="primary">say hello with head</button>
        <button onClick={this.fileUploadHandler} color="primary">fileUploadHandler</button>
        <button onClick={this.UploadHandler} color="primary">UploadHandlertoipfs</button>
 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilePond/>
      </div>

    );
  }
}

export default App;

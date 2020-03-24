import React, { Component } from "react";
import SignaturePad from "signature_pad";

import { Outside, Container, Signature, Botao } from "./styles";
import api from "../../services/api";

import CloseIcon from "../../assets/CloseIcon.svg";

let canvas;
let signature;

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participante: {}
    };
  }

  async componentDidMount() {
    canvas = this.refs.canvas;
    signature = new SignaturePad(canvas, {
      backgroundColor: "rgb(255, 255, 255)"
    });
  }

  componentDidUpdate() {
    if (this.props.participante._id) {
      function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          var reader = new FileReader();
          reader.onloadend = function() {
            callback(reader.result);
          };
          reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
      }

      toDataURL(
        `http://localhost:4000/signature-${this.props.participante._id}.png`,
        function(dataUrl) {
          signature.fromDataURL(dataUrl);
        }
      );
    }
  }

  clearCanvas = () => {
    signature.clear();
  };

  saveCanvas = async () => {
    const participante = {
      ...this.props.participante,
      assinatura: signature.toDataURL()
    };

    api.put(
      `/eventos/${participante.evento._id}/participantes/${participante._id}/changesignature`,
      participante
    );
  };

  render() {
    return (
      <div>
        <Outside propcanvas={this.props.isOpen}></Outside>
        <Container propcanvas={this.props.isOpen}>
          <header>
            <div />
            <span>Assinatura digital de confirmação</span>
            <img
              src={CloseIcon}
              alt="Close icon"
              onClick={this.props.onClose}
            />
          </header>
          <section>
            <Signature ref="canvas" width="306" height="185" />
            <span>Assine usando a linha guia</span>
          </section>
          <footer>
            <Botao type="button" onClick={this.clearCanvas}>
              LIMPAR
            </Botao>

            <Botao bgcolor={"#0DAE32"} type="button" onClick={this.saveCanvas}>
              SALVAR
            </Botao>
          </footer>
        </Container>
      </div>
    );
  }
}

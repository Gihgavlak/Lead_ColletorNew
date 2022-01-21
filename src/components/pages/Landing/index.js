import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Header from "../../Header";

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: this.props.state ? this.props.state.message : '',
    };
  }

  save = (lead) => {
    const url = "http://localhost:8080/leads";
    let data = {
      nome: lead.nome,
      email: lead.email,
      observacoes: lead.observacoes,
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    fetch(url, requestInfo).then((response) => {
      if (!response.ok) {
        throw new Error(
          "Tente novamente"
        );
      }
      return response;
    });
  };

  render() {
    return (
      <div className="container">
        <Header title="Receba novidades!" />
        <hr />
        <Form className="form">
          <FormGroup>
            <Label className="label" for="nome">
              Nome Completo
            </Label>
            <Input
              type="text"
              id="nome"
              placeholder="Digite o seu nome"
              onChange={(e) => (this.nome = e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="seunome@dominio.com"
              onChange={(e) => (this.email = e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="observacoes">
              Observações
            </Label>
            <textarea
              class="form-control"
              id="observacoes"
              rows="3"
              placeholder="Digite suas principais características"
              onChange={(e) => (this.observacoes = e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button
              className="button"
              color="success"
              block
              onClick={this.saveLead}
            >
              Enviar
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
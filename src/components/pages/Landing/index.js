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
      <div>
        <Header title="Landing Page" />
        <hr />
        <Form>
          <FormGroup>
            <Label for="name"> Nome: </Label>
            <Input type="text" id="name" placeholder="Informe o seu nome" />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Email: </Label>
            <Input type="text" id="email" placeholder="Informe o seu email" />
          </FormGroup>
          <FormGroup>
            <Label for="observations"> Observações: </Label>
            <Input
              type="text"
              id="observations"
              placeholder="Digite alguma observação"
            />
          </FormGroup>
          <Button color="danger" block>
            {" "}
            ENVIAR
          </Button>
        </Form>
      </div>
    );
  }
}

import React from "react";

class AutoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ""};
    this.state = {value1: ""};
    this.state = {date: ""};

    this.handleChange=this.handleChange.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChangeDate=this.handleChangeDate.bind(this);
}

handleChange(event){
  this.setState({value: event.target.value})
}
handleChange1(event){
  this.setState({value1: event.target.value})
}
handleChangeDate(event){
  this.setState({date: event.target.value})
}

handleSubmit(event){
  event.preventDefault();
  const message = `
  ФИО: ${this.state.value}
  Телефон: ${this.state.value1}
  Дата: ${this.state.date}
  `;
  console.log(message);
  alert(message);
}

render(){
  return(
    <div className="container">
        <h2 className="autorization-title">Авторизация</h2>
        <form className="autorization" onSubmit={this.handleSubmit}>
            <h4 className="autorization-e-mail-title">ФИО пользователя или <span>E-mail</span></h4>
            <input className="autorization-e-mail" type="text" value={this.state.value} onChange={this.handleChange}/>
            <h4 className="autorization-password-title">Номер телефона</h4>
            <input type="text" value={this.state.value1} className="autorization-password" onChange={this.handleChange1}/>
            <h4 className="autorization-password-title">Выберите дату</h4>
            <input type="date" className="autorization-password" onChange={this.handleChangeDate}/>
            <div className="buttons">
                <input type="submit" value="Зарегистрироваться" className="autorization-button sign-up"/>
            </div>
        </form>
    </div>
  );
}
}

export default AutoForm;
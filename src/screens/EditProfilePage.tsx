import InputField from '../components/Inputs/InputField';
import GreenButton from '../components/Inputs/GreenButton';
import React, { Component } from 'react';

import UserManager from '../manager/UserManager';
import UserTO from '../to/UserTO';

interface EditProfilePageProps {}

interface EditProfilePageState {
    loggedInUser: UserTO;
    nombre: string;
    apellido: string;
    numero: string;
    imagen: string
}

  class EditProfilePage extends Component<EditProfilePageProps, EditProfilePageState> {

    private userItem = localStorage.getItem("user");
    private user: UserTO = this.userItem !== null ? JSON.parse(this.userItem) : new UserTO();

    constructor(props: EditProfilePageProps) {
        super(props);
        this.state = {
          loggedInUser: new UserTO(),
          nombre: this.user.firstName ?? '',
          apellido: this.user.lastName ?? '',
          numero: this.user.telephone ?? '',
          imagen: 'data:image/png;base64,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',
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
      const userManager = new UserManager()
      userManager.findOne(this.user.id || 0)
        .then((item: UserTO) =>{
          this.setState({ loggedInUser: item })
        })
    }

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;
      console.log(name)
      this.setState({
        [name]: value,
      } as unknown as Pick<EditProfilePageState, keyof EditProfilePageState>);
    }

    private handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
      const input = event.target;
      console.log('aqui')
      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          const base64String = 'data:image/jpeg;base64,' + e.target.result.split(',')[1];
          this.setState({ imagen: base64String })
        };
        reader.readAsDataURL(input.files[0]);
    }
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    
    event.preventDefault();

    const userManager = new UserManager()
    const userTO = this.state.loggedInUser
    
    userTO.firstName = this.state.nombre
    userTO.lastName = this.state.apellido
    userTO.telephone = this.state.numero
    userTO.profileImage = this.state.imagen

    userManager.update(userTO)
      .then(resp => {
        console.log(resp)
      })
      .then(() => {
        window.location.replace('/inicio');
      })
      .catch((error) => {
        console.error('Error actualizando perfil:', error);
      });

  }

  private handleCerrarSesion() {
    localStorage.removeItem('user');
    window.location.replace('/inicio');
  }

  render() {
    return (
      <>
        <div className="mt-24"></div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8 ml-48">Edita tu perfil</h2>
        <form className="mx-48 my-10" onSubmit={this.handleSubmit}>
          <div className="mb-5">
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">
              Nombre
            </label>
            <InputField name="nombre" type={'text'} defaultValue={this.state.loggedInUser.firstName} onChange={this.handleInputChange}></InputField>
          </div>
          <div className="mb-5">
            <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900">
              Apellido
            </label>
            <InputField name="apellido" type={'text'} defaultValue={this.state.loggedInUser.lastName} onChange={this.handleInputChange}></InputField>
          </div>
          <div className="mb-5">
        <label htmlFor="numero" className="block mb-2 text-sm font-medium text-gray-900">
          Teléfono
        </label>
        <InputField
          name="numero"
          type="text"
          onChange={this.handleInputChange}
          defaultValue={this.state.loggedInUser.telephone}   
                ></InputField>
        </div>
        <div className="mb-5">
            <label htmlFor="imagen" className="block mb-2 text-sm font-medium text-gray-900">
              Imagen
            </label>
            <input
              type="file"
              accept=".jpg, .jpeg"
              name="imagen"
              onChange={this.handleImageChange}
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className='flex gap-48 mx-20'>
            <GreenButton label="Guardar"></GreenButton>
            <GreenButton type="button" label="Cerrar sesión" onClick={this.handleCerrarSesion}></GreenButton>
          </div>
          
        </form>
      </>
    );
  }
}

export default EditProfilePage;

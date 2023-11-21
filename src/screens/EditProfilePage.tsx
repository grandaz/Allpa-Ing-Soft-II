import InputField from '../components/Inputs/InputField';
import GreenButton from '../components/Inputs/GreenButton';
import { Component } from 'react';

interface EditProfilePageProps {}

class EditProfilePage extends Component<EditProfilePageProps> {
  constructor(props: EditProfilePageProps) {
    super(props);
  }

  handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    // Aquí puedes manejar el archivo de imagen como desees,
    // por ejemplo, podrías mostrar una vista previa o enviarlo al servidor.
    if (file) {
      console.log('Archivo seleccionado:', file);
    }
  };

  handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = event.target.value;
  
    if (/^\d{9}$/.test(phoneNumber)) {
      // Teléfono válido, puedes manejarlo como desees
      console.log('Teléfono válido:', phoneNumber);
    } else {
      // Teléfono no válido, puedes mostrar un mensaje de error o tomar otra acción
      console.error('El teléfono debe tener 9 dígitos');
    }
  };

  handleEmailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
  
    // Verificar si el correo electrónico ya está ingresado en el servidor
    /*try {
      const response = await fetch(`URL_DEL_SERVIDOR/verificarCorreo?email=${email}`);
      const data = await response.json();
  
      if (data.existe) {
        console.error('Este correo electrónico ya está registrado');
      } else {
        // El correo electrónico no está registrado, puedes continuar
        console.log('Correo electrónico válido:', email);
      }
    } catch (error) {
      console.error('Error al verificar el correo electrónico:', error);
    }*/
  };


  render() {
    return (
      <>
        <div className="mt-24"></div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8 ml-48">Edita tu perfil</h2>
        <form className="mx-48 my-10">
          <div className="mb-5">
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">
              Nombre
            </label>
            <InputField name="nombre" type={'text'}></InputField>
          </div>
          <div className="mb-5">
            <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900">
              Apellido
            </label>
            <InputField name="apellido" type={'text'}></InputField>
          </div>
          <div className="mb-5">
        <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900">
          Teléfono
        </label>
        <InputField
          name="telefono"
          type="text"
          onChange={this.handlePhoneChange}
                ></InputField>
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
             Email
            </label>
            <InputField
            name="email"
            type="text"
            onChange={this.handleEmailChange}
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
          <GreenButton label="Guardar"></GreenButton>
        </form>
      </>
    );
  }
}

export default EditProfilePage;

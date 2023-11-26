
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditProfilePage from '../screens/EditProfilePage';

//bernuy
test('que muestre el título', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByText('Edita tu perfil');
  expect(linkElement).toBeInTheDocument();
});

test('visibilidad de input name', () => {
  render(<EditProfilePage />);
  const myElement = screen.getByTestId('nombre');
  expect(myElement).toBeVisible();
});

test('visibilidad de input apellido', () => {
  render(<EditProfilePage />);
  const myElement = screen.getByTestId('apellido');
  expect(myElement).toBeVisible();
});

test('visibilidad de input numero', () => {
  render(<EditProfilePage />);
  const myElement = screen.getByTestId('numero');
  expect(myElement).toBeVisible();
});

test('visibilidad de input imagen', () => {
  render(<EditProfilePage />);
  const myElement = screen.getByTestId('imagen');
  expect(myElement).toBeVisible();
});

test('existencia de boton guardar', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByTestId('botonGuardar');
  expect(linkElement).toBeInTheDocument();
});


//granda

test('que muestre el texto de label nombre', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByText('Nombre');
  expect(linkElement).toBeInTheDocument();
});

test('que muestre el texto de label apellido', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByText('Apellido');
  expect(linkElement).toBeInTheDocument();
});

test('que muestre el texte telefono', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByText('Teléfono');
  expect(linkElement).toBeInTheDocument();
});

test('que muestre el texto de label imagen', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByText('Imagen');
  expect(linkElement).toBeInTheDocument();
});

test('existencia de boton botonHistorial', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByTestId('botonHistorial');
  expect(linkElement).toBeInTheDocument();
});

test('existencia de boton botonCerrarSesion', () => {
  render(<EditProfilePage />);
  const linkElement = screen.getByTestId('botonCerrarSesion');
  expect(linkElement).toBeInTheDocument();
});


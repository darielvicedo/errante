import avatar from "./assets/avatar.jpg";

export default function renderHeader(): string {
  return /*html*/ `
    <nav class="navbar bg-primary" data-bs-theme="light">
        <div class="container-fluid">
            <a class="navbar-brand text-dark" href="/">
                <img src="${avatar}" alt="Logo" width="30" height="30" class="d-inline-block align-text-top rounded-circle">
                El Matancero Errante
            </a>
        </div>
    </nav>
`;
}

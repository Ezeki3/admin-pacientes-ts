// Selectores
export const pacienteInput = document.querySelector('#paciente') as HTMLInputElement
export const propietarioInput = document.querySelector('#propietario') as HTMLInputElement
export const emailInput = document.querySelector('#email') as HTMLInputElement
export const fechaInput = document.querySelector('#fecha') as HTMLInputElement
export const sintomasInput = document.querySelector<HTMLTextAreaElement>('#sintomas') as HTMLTextAreaElement

export const formulario = document.querySelector<HTMLFormElement>('#formulario-cita') as HTMLFormElement
export const formularioInput = document.querySelector('#formulario-cita input[type="submit"]') as HTMLInputElement
export const contenedorCitas = document.querySelector<HTMLDivElement>('#citas') as HTMLDivElement

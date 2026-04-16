import {securityApi} from './api/securityApi';
import {loader} from '../../shared/UI/loader';
import {toast} from '../../shared/UI/Toast';

export class Register {
  private readonly formName: string;
  private readonly form: HTMLFormElement;
  private readonly submitBtn: HTMLButtonElement;

  constructor () {
    this.formName = 'registration';
    this.submitBtn = document.getElementById('register-button') as HTMLButtonElement;
    this.form = document.querySelector(`form[name="${this.formName}"]`) as HTMLFormElement;
  }

  public init () {
    if (!this.form || !this.submitBtn) return;

    this.form.addEventListener('submit', (e: Event) => this.bindSubmit(e));
  }

  private async bindSubmit (e: Event) {
    e.preventDefault();

    try {
      loader.freezeElement(this.submitBtn);

      const data = new FormData(this.form);
      const response = await securityApi.register(data);

      if (!response.success) {
        toast.error(response.message ?? 'An error occurred, please try again.');
        return;
      }

      toast.success(response.message ?? 'Successfully registered!. You can now log in.');

      await new Promise(resolve => setTimeout(resolve, 5000));

      this.form.reset();
      window.location.href = '/login';
    } catch (e) {
      console.error(e);
    } finally {
      loader.unfreezeElement(this.submitBtn);
    }
  }
}

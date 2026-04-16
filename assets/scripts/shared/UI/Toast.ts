import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';

export class Toast {

  private notyf = new Notyf({
    duration: 4000,
    position: {x: 'right', y: 'top'},
    dismissible: true,
    types: [
      {
        type: 'info',
        background: '#0d6efd',
        icon: '<i class="fas fa-info-circle text-white"></i>'
      },
      {
        type: 'success',
        background: '#10b981',
      }
    ]
  });

  public success (message: string): void {
    this.notyf.success(message);
  }

  public error (message: string): void {
    this.notyf.error(message);
  }

  public info (message: string, iconHtml?: string): void {
    const options: Partial<import('notyf').INotyfNotificationOptions> = {
      type: 'info',
      message: message,
    };

    if (iconHtml) {
      options.icon = iconHtml;
    }

    this.notyf.open(options);
  }

  public confirm (options: ConfirmOptions): Promise<{ isConfirmed: boolean }> {
    return new Promise((resolve) => {
      const {
        title,
        text,
        confirmButtonText = 'Confirm',
        cancelButtonText = 'Cancel',
        reverseColors = false,
        confirmButtonColor = reverseColors ? '#FF5A5F' : '#0d6efd',
        cancelButtonColor = reverseColors ? '#0d6efd' : '#FF5A5F',
      } = options;

      const dialog = document.createElement('dialog');

      dialog.className = 'ys-dialog-native p-4 rounded-2xl shadow border-0 bg-white';

      dialog.innerHTML = `
        <form method="dialog" class="flex flex-col gap-3">
          <h3 class="text-base font-bold text-gray-900 m-0">${title}</h3>
          ${text ? `<p class="text-gray-600 m-0">${text}</p>` : ''}

          <div class="flex justify-end gap-2 mt-3">
            <button
                value="cancel"
                style="background-color:${cancelButtonColor}"
                class="px-4 py-2 text-white rounded-2xl border-0 hover:opacity-90 transition"
            >
              ${cancelButtonText}
            </button>
            <button
                value="confirm"
                style="background-color:${confirmButtonColor}"
                class="px-4 py-2 text-white rounded-2xl border-0 hover:opacity-90 transition"
            >
              ${confirmButtonText}
            </button>
          </div>
        </form>
      `;

      dialog.addEventListener('close', () => {
        const isConfirmed = dialog.returnValue === 'confirm';
        resolve({isConfirmed});
        dialog.remove();
      });

      document.body.appendChild(dialog);
      dialog.showModal();
    });
  }
}

export interface ConfirmOptions {
  title: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  reverseColors?: boolean;
}

export const toast = new Toast();

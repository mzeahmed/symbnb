import flatpickr from 'flatpickr';
import { French } from 'flatpickr/dist/l10n/fr.js';

export class Book {
  public boot (): void {
    const page = document.getElementById('booking-page');
    const startInput = document.getElementById('booking_startDate') as HTMLInputElement | null;
    const endInput = document.getElementById('booking_endDate') as HTMLInputElement | null;
    const amountElement = document.getElementById('amount');
    const daysElement = document.getElementById('days');

    if (!page || !startInput || !endInput || !amountElement || !daysElement) {
      return;
    }

    const disabledDates = this.parseDisabledDates(page.dataset.disabledDates);
    const pricePerNight = Number.parseFloat(page.dataset.price ?? '0');

    const calculateAmount = (): void => {
      const startDate = this.parseFrenchDate(startInput.value);
      const endDate = this.parseFrenchDate(endInput.value);

      if (!startDate || !endDate || startDate >= endDate) {
        daysElement.textContent = '0';
        amountElement.textContent = '...';
        return;
      }

      const days = (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000);
      const amount = days * pricePerNight;

      daysElement.textContent = String(days);
      amountElement.textContent = amount.toLocaleString('fr-FR');
    };

    const commonConfig = {
      locale: French,
      dateFormat: 'd/m/Y',
      altInput: true,
      altFormat: 'd/m/Y',
      minDate: 'today',
      disable: disabledDates,
      onChange: calculateAmount,
    };

    flatpickr('#booking_startDate', commonConfig);
    flatpickr('#booking_endDate', commonConfig);
  }

  private parseDisabledDates(raw: string | undefined): string[] {
    if (!raw) {
      return [];
    }

    try {
      const parsed: unknown = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.map((value) => String(value)) : [];
    } catch {
      return [];
    }
  }

  private parseFrenchDate(value: string): Date | null {
    if (!value.includes('/')) {
      return null;
    }

    const [day, month, year] = value.split('/');
    if (!day || !month || !year) {
      return null;
    }

    const parsed = new Date(`${year}-${month}-${day}`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
}

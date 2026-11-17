import { useState } from 'react';

export function useFormError() {
    const [error, setError] = useState('');

    const showError = (message) => setError(message);
    const clearError = () => setError('');

    const inputClass = (base) => `${base} ${error ? 'input-error' : ''}`.trim();

    return { error, showError, clearError, inputClass };
}

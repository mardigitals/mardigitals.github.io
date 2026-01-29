import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [status, setStatus] = useState<string>('');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData(prevData => ({...prevData, [name]: value}));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus('Enviando...');

      // Reemplaza esto con tu endpoint de Formspree o usa Netlify
      const response = await fetch('https://formspree.io/f/TU_ID_DE_FORMSPREE', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setData(defaultData); // Limpia el formulario
      } else {
        setStatus('Hubo un error. Intenta de nuevo.');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSendMessage}>
      <input 
        className={inputClasses} 
        name="name" 
        onChange={onChange} 
        value={data.name}
        placeholder="Mi nombre" 
        required 
        type="text" 
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        value={data.email}
        placeholder="Mi dirección de email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        value={data.message}
        placeholder="Escribe un mensaje para Mario..."
        required
        rows={6}
      />
      <div className="flex items-center gap-x-4">
        <button
          aria-label="Ponerse en contacto con Mario Ricotti"
          className="w-max rounded-full border-2 border-cyan-500 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-stone-800"
          type="submit">
          Enviar mensaje
        </button>
        {status && <span className="text-sm text-cyan-500 font-medium">{status}</span>}
      </div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
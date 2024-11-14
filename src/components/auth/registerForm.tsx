import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../services/AuthServices';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormData {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    numero_telephone: string;
    adresse: string;
    birthday: Date | null;
    profilePic: File | null;
}

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        numero_telephone: '',
        adresse: '',
        birthday: null,
        profilePic: null,
    });
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };

    const handleDateChange = (date: Date | null) => {
        setFormData(prevData => ({
            ...prevData,
            birthday: date
        }));
    };

    const validateForm = (): boolean => {
        const requiredFields = ['nom', 'prenom', 'email', 'password', 'numero_telephone', 'adresse', 'birthday'];
        if (requiredFields.some(field => !(formData as any)[field])) {
            setError('Please fill in all fields');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Please enter a valid email address');
            return false;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) return;

        setIsLoading(true);

        const userData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'birthday' && value instanceof Date) {
                userData.append(key, value.toISOString());
            } else if (value !== null) {
                userData.append(key, value as string | Blob);
            }
        });

        try {
            await registerUser(userData);
            navigate('/login');
        } catch (err: any) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'An error occurred during registration');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-red-700 text-4xl font-bold text-center mb-6">Register</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {['nom', 'prenom', 'email', 'password', 'numero_telephone', 'adresse'].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block mb-1 font-semibold text-red-700 capitalize">
                                {field === 'numero_telephone' ? 'Phone Number' : field}
                            </label>
                            <input
                                id={field}
                                name={field}
                                type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                                placeholder={`Enter your ${field === 'numero_telephone' ? 'phone number' : field}`}
                                value={(formData as any)[field]}
                                onChange={handleChange}
                                className="p-2 w-full border rounded text-black focus:outline-none focus:ring-2 focus:ring-red-700"
                                required
                            />
                        </div>
                    ))}
                    <div>
                        <label htmlFor="birthday" className="block mb-1 font-semibold text-red-700 capitalize">Birthday</label>
                        <div className="p-2 w-full border rounded text-black focus:outline-none focus:ring-2 focus:ring-red-700">
                            <DatePicker
                                selected={formData.birthday}
                                onChange={handleDateChange}
                                dateFormat="yyyy-MM-dd"
                                maxDate={new Date()}
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                placeholderText="Select your birthday"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="profilePic" className="block mb-1 font-semibold text-red-700 capitalize">
                            Profile Picture
                        </label>
                        <input
                            id="profilePic"
                            name="profilePic"
                            type="file"
                            onChange={handleChange}
                            accept="image/*"
                            className="p-2 w-full border rounded text-black focus:outline-none focus:ring-2 focus:ring-red-700"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-800 text-white p-2 rounded hover:bg-black transition duration-200"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <p className="mt-4 text-black text-center">
                    Already have an account? <Link to="/login" className="text-red-800 font-semibold hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;

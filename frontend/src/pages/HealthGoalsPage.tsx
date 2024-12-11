import React, { useState } from 'react';

const HealthGoalsPage: React.FC = () => {
    const [healthGoals, setHealthGoals] = useState({
        goals: '',
        allergies: '',
        preferences: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHealthGoals({ ...healthGoals, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(healthGoals);
    };

    return (
        <div>
            <h1>Set Your Health Goals</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="goals"
                    placeholder="Health Goals"
                    value={healthGoals.goals}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="allergies"
                    placeholder="Allergies"
                    value={healthGoals.allergies}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="preferences"
                    placeholder="Preferences"
                    value={healthGoals.preferences}
                    onChange={handleChange}
                />
                <button type="submit">Save Goals</button>
            </form>
        </div>
    );
};

export default HealthGoalsPage;

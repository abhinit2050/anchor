/// <reference types="vitest/globals" />


import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders project title',()=>{
    render(<Header />)
    expect(screen.getByText('Baseline')).toBeInTheDocument()
})
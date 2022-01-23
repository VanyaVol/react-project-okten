import React from 'react';

import css from "./Buttons.module.css";


const Buttons = ({newImage, setUpdate}) => {
    return (
        <div className={css.buttonsBlock}>
            <button className={css.button} onClick={() => {
                setUpdate('car')
                newImage();
            }}>Car
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('girl')
                newImage();
            }}>Girl
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('man')
                newImage();
            }}>Man
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('cat')
                newImage();
            }}>Cat
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('dog')
                newImage();
            }}>Dog
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('city')
                newImage();
            }}>City
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('fruits')
                newImage();
            }}>Fruits
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('paris')
                newImage();
            }}>Paris
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('brazil')
                newImage();
            }}>Brazil
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('rio')
                newImage();
            }}>Rio
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('ukraine')
                newImage();
            }}>Ukraine
            </button>
            <button className={css.button} onClick={() => {
                setUpdate('')
                newImage();
            }}>Random picture
            </button>
        </div>
    );
};

export {Buttons};

import css from './ContactList.module.css';
export function ContactList({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

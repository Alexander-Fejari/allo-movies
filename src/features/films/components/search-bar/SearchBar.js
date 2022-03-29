import { Component } from 'react';
import { Formik } from 'formik';

export default class SearchBar extends Component {
  submit = (values, actions) => {
    this.props.fetchMovies(values).then(() => actions.setSubmitting(false));
  };

  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{ query: '', languag: 'fr-FR' }}>
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input
              className='form-control'
              name='query'
              type='search'
              placeholder='Search ...'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              className='form-select'
              name='language'
              onChange={handleChange}
              onBlur={handleBlur}>
              <option value='en-US'>Anglais</option>
              <option value='fr-FR'>Français</option>
            </select>
            <button
              className='btn btn-small btn-success'
              type='submit'
              disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    );
  }
}

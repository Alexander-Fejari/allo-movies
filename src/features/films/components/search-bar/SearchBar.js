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
          <form
            className='d-flex flex-row justify-content-center p-2 m-2'
            onSubmit={handleSubmit}>
            <input
              className='w-50 form-control me-2'
              name='query'
              type='search'
              placeholder='Search ...'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              className='me-2 form-select'
              style={{ width: '10%' }}
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

# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Toeic Tips and Tricks'
copyright = '2024, RyanDank'
author = 'RyanDank'
release = '2024'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx_copybutton','sphinx_new_tab_link','sphinx_rtd_dark_mode','sphinx_favicon']

templates_path = ['_templates']
exclude_patterns = []
html_logo = "_static/bluewolf.png"
favicons = [
    {
        "sizes": "32x32",
        "href": "logo.png",
    }
    ]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']
# def setup(app):
#     app.add_css_file("custom.css")
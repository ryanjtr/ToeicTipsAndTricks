# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Toeic Tips and Tricks'
copyright = '2024, Dang Kien Quoc'
author = 'RyanDank'
release = '2024'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx_copybutton','sphinx_new_tab_link','sphinx_rtd_dark_mode','sphinx_favicon','sphinx_tabs.tabs']

#--Tab extension configuration--------------------------------------------------
sphinx_tabs_valid_builders = ['linkcheck']
sphinx_tabs_disable_tab_closing = True
# sphinx_tabs_disable_css_loading = True


templates_path = ['_templates']
html_show_sourcelink = False
exclude_patterns = []
html_logo = "_static/bwolf.png"
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

html_css_files = [
    'custom.css',
]

html_js_files = [
    'scripts.js',
]

html_sidebars = {
    '**': ['footer.html'],
}


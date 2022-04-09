function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var Index$1 = {};

var ids = Index$1.ids = [1];
var modules = Index$1.modules = {
  103: function(module, exports2, __webpack_require__) {
    var content = __webpack_require__(105);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module.i, content, ""]];
    if (content.locals)
      module.exports = content.locals;
    var add = __webpack_require__(7).default;
    module.exports.__inject__ = function(context) {
      add("73ae6f3e", content, true, context);
    };
  },
  104: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  105: function(module, exports2, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module.i, 'article{-moz-column-break-inside:auto;break-inside:auto}article:empty{height:195px;background-image:radial-gradient(circle 16px,#2b2d2f 99%,transparent 0),linear-gradient(#2b2d2f 40px,transparent 0),linear-gradient(#f7f7f7 100%,transparent 0);background-size:32px 32px,204px 16px,100% 100%;background-position:24px 24px,0 76px,0 0}[aria-label="Pagination Navigation"] .pager-link{display:inline-block;line-height:2.75;padding:0 1em}[aria-label="Pagination Navigation"] .pager-link.active--exact{text-decoration:none;color:inherit;cursor:default}:link{color:cmyk(100%,100%,0,0)}:link:visited{color:cmyk(0,100%,0,50%)}:link:focus{outline:2px solid var(--color__process-cyan)}:link:hover{color:var(--color__process-cyan)}:link:active{color:#8b534e}', ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module.exports = ___CSS_LOADER_EXPORT___;
  },
  106: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("Layout", [_c("div", { staticClass: "columns" })]);
    };
    var staticRenderFns = [];
    var WordPressPostvue_type_template_id_4905879d_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("Layout", [_c("article", { key: _vm.$page.post.id, staticClass: "h-entry", class: _vm.$page.post.id, attrs: { "role": "main", "itemscope": "", "itemtype": "https://schema.org/NewsArticle" } }, [_c("header", [_c("h1", { domProps: { "innerHTML": _vm._s(_vm.$page.post.title) } }), _vm._v(" "), _c("time", { staticClass: "fremont-pub", attrs: { "datetime": _vm.$page.post.date } }, [_c("span", { staticClass: "fremont-pub-date", domProps: { "innerHTML": _vm._s(_vm.currentDate(_vm.$page.post.date)) } }, [_vm._v("Today")]), _vm._v(" "), _c("span", { staticClass: "fremont-pub-time" }, [_vm._v("Updated "), _c("span", { staticClass: "css-epvm6" }, [_vm._v("12:00 p.m. PT")])])])]), _vm._v(" "), _c("main", { domProps: { "innerHTML": _vm._s(_vm.$page.post.content) } })])]);
    };
    var WordPressPostvue_type_template_id_4905879d_staticRenderFns = [];
    var external_graphql_tag_ = __webpack_require__(21);
    var external_graphql_tag_default = /* @__PURE__ */ __webpack_require__.n(external_graphql_tag_);
    var WordPressPostvue_type_script_lang_js_ = {
      methods: {
        currentDate(d) {
          const postDate = new Date(d);
          const date = `${postDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "America/Los_Angeles"
          })}`;
          return date;
        }
      },
      apollo: {
        characters: external_graphql_tag_default.a`
      query Post ($path: String!) {
        post: wordPressPost (path: $path) {
          id
          title
          date
          content
          featuredMedia {
            id
          }
          categories {
            slug
          }
        }
      }
    `
      }
    };
    var templates_WordPressPostvue_type_script_lang_js_ = WordPressPostvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(templates_WordPressPostvue_type_script_lang_js_, WordPressPostvue_type_template_id_4905879d_render, WordPressPostvue_type_template_id_4905879d_staticRenderFns, false, null, null, "3ebfea7e");
    var WordPressPost = component.exports;
    var WordPressPostExcerptvue_type_template_id_2f71bbb3_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("article", { key: _vm.node.id, staticClass: "h-entry", class: _vm.node.id, attrs: { "role": "main", "itemscope": "", "itemtype": "https://schema.org/NewsArticle" } }, [_vm._ssrNode('<header><h2 itemprop="headline" class="p-name">' + _vm._ssrEscape(_vm._s(_vm.node.title)) + "</h2> <time" + _vm._ssrAttr("datetime", _vm.node.date) + ' itemprop="datePublished" class="dt-published">' + _vm._ssrEscape(_vm._s(_vm._f("moment")(_vm.node.date))) + '</time> <meta itemprop="dateModified"' + _vm._ssrAttr("content", _vm.node.modified) + '> <span itemprop="publisher" itemscope="itemscope" itemtype="https://schema.org/Organization"><meta itemprop="name" content="Los Angeles Star"> <meta itemprop="logo" url="@/assets/los-angeles-star-logo.svg"></span></header> <div class="p-summary">' + _vm._s(_vm.node.excerpt) + "</div> "), _c("router-link", { attrs: { "to": _vm.node.path } }, [_vm._v("Read more")])], 2);
    };
    var WordPressPostExcerptvue_type_template_id_2f71bbb3_staticRenderFns = [];
    var external_dayjs_ = __webpack_require__(102);
    var external_dayjs_default = /* @__PURE__ */ __webpack_require__.n(external_dayjs_);
    var WordPressPostExcerptvue_type_script_lang_js_ = {
      props: {
        node: {
          required: true,
          type: Object
        }
      },
      filters: {
        moment: function(date) {
          return external_dayjs_default()(date).format("dddd, MMMM Do, YYYY");
        }
      }
    };
    var templates_WordPressPostExcerptvue_type_script_lang_js_ = WordPressPostExcerptvue_type_script_lang_js_;
    var WordPressPostExcerpt_component = Object(componentNormalizer["a"])(templates_WordPressPostExcerptvue_type_script_lang_js_, WordPressPostExcerptvue_type_template_id_2f71bbb3_render, WordPressPostExcerptvue_type_template_id_2f71bbb3_staticRenderFns, false, null, null, "78512f30");
    var WordPressPostExcerpt = WordPressPostExcerpt_component.exports;
    var Indexvue_type_script_lang_js_ = {
      components: {
        Post: WordPressPost,
        Article: WordPressPostExcerpt
      },
      metaInfo: {
        bodyAttrs: {
          class: "blog"
        }
      },
      apollo: {
        characters: external_graphql_tag_default.a`
      query Home ($page: Int) {
        allWordPressPost (perPage: 10, page: $page) @paginate {
          totalCount
          pageInfo {
            totalPages
            currentPage
            isFirst
            isLast
          }
          edges {
            node {
              id
              title
              path
              excerpt
              date
              categories {
                title
              }
            }
          }
        }
      }
    `
      }
    };
    var pages_Indexvue_type_script_lang_js_ = Indexvue_type_script_lang_js_;
    function injectStyles(context) {
      var style0 = __webpack_require__(104);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var Index_component = Object(componentNormalizer["a"])(pages_Indexvue_type_script_lang_js_, render, staticRenderFns, false, injectStyles, null, "52b81d76");
    __webpack_exports__["default"] = Index_component.exports;
  }
};

const Index = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': Index$1,
  ids: ids,
  modules: modules
}, [Index$1]);

export { Index as I };

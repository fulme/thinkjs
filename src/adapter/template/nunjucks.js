'use strict';
/**
 * nunjucks template
 * @type {Class}
 */
export default class extends think.adapter.template {
  /**
   * run
   * @param  {String} templateFile []
   * @param  {Object} tVar         []
   * @return {Promise}             []
   */
  async run(templateFile, tVar, config){
    let nunjucks = await think.npm('nunjucks');
    
    let conf = think.extend({
      autoescape: false,
      watch: false,
      noCache: false,
      throwOnUndefined: false
    }, think.config('view.options'), config && config.options);

    nunjucks.configure(think.ROOT_PATH, conf);
    return nunjucks.render(templateFile, tVar);
  }
}
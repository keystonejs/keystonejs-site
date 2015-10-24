/* */ 
(function(process) {
  function run_test() {
    for (var k in SOURCE_MAP_TEST_MODULE) {
      if (/^test/.test(k)) {
        SOURCE_MAP_TEST_MODULE[k](assert);
      }
    }
  }
  var SOURCE_MAP_TEST_MODULE = (function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId])
        return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.loaded = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
  })([function(module, exports, __webpack_require__) {
    {
      var SourceMapGenerator = __webpack_require__(1).SourceMapGenerator;
      var SourceMapConsumer = __webpack_require__(7).SourceMapConsumer;
      var SourceNode = __webpack_require__(10).SourceNode;
      var util = __webpack_require__(11);
      exports['test some simple stuff'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'foo.js',
          sourceRoot: '.'
        }).toJSON();
        assert.ok('file' in map);
        assert.ok('sourceRoot' in map);
        var map = new SourceMapGenerator().toJSON();
        assert.ok(!('file' in map));
        assert.ok(!('sourceRoot' in map));
      };
      exports['test JSON serialization'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'foo.js',
          sourceRoot: '.'
        });
        assert.equal(map.toString(), JSON.stringify(map));
      };
      exports['test adding mappings (case 1)'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'generated-foo.js',
          sourceRoot: '.'
        });
        assert.doesNotThrow(function() {
          map.addMapping({generated: {
              line: 1,
              column: 1
            }});
        });
      };
      exports['test adding mappings (case 2)'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'generated-foo.js',
          sourceRoot: '.'
        });
        assert.doesNotThrow(function() {
          map.addMapping({
            generated: {
              line: 1,
              column: 1
            },
            source: 'bar.js',
            original: {
              line: 1,
              column: 1
            }
          });
        });
      };
      exports['test adding mappings (case 3)'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'generated-foo.js',
          sourceRoot: '.'
        });
        assert.doesNotThrow(function() {
          map.addMapping({
            generated: {
              line: 1,
              column: 1
            },
            source: 'bar.js',
            original: {
              line: 1,
              column: 1
            },
            name: 'someToken'
          });
        });
      };
      exports['test adding mappings (invalid)'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'generated-foo.js',
          sourceRoot: '.'
        });
        assert.throws(function() {
          map.addMapping({});
        });
        assert.throws(function() {
          map.addMapping({
            generated: {
              line: 1,
              column: 1
            },
            original: {
              line: 1,
              column: 1
            }
          });
        });
      };
      exports['test adding mappings with skipValidation'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'generated-foo.js',
          sourceRoot: '.',
          skipValidation: true
        });
        assert.throws(function() {
          map.addMapping({});
        });
        assert.doesNotThrow(function() {
          map.addMapping({
            generated: {
              line: 1,
              column: 1
            },
            original: {
              line: 1,
              column: 1
            }
          });
        });
      };
      exports['test that the correct mappings are being generated'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'min.js',
          sourceRoot: '/the/root'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 1
          },
          original: {
            line: 1,
            column: 1
          },
          source: 'one.js'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 5
          },
          original: {
            line: 1,
            column: 5
          },
          source: 'one.js'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 9
          },
          original: {
            line: 1,
            column: 11
          },
          source: 'one.js'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 18
          },
          original: {
            line: 1,
            column: 21
          },
          source: 'one.js',
          name: 'bar'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 21
          },
          original: {
            line: 2,
            column: 3
          },
          source: 'one.js'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 28
          },
          original: {
            line: 2,
            column: 10
          },
          source: 'one.js',
          name: 'baz'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 32
          },
          original: {
            line: 2,
            column: 14
          },
          source: 'one.js',
          name: 'bar'
        });
        map.addMapping({
          generated: {
            line: 2,
            column: 1
          },
          original: {
            line: 1,
            column: 1
          },
          source: 'two.js'
        });
        map.addMapping({
          generated: {
            line: 2,
            column: 5
          },
          original: {
            line: 1,
            column: 5
          },
          source: 'two.js'
        });
        map.addMapping({
          generated: {
            line: 2,
            column: 9
          },
          original: {
            line: 1,
            column: 11
          },
          source: 'two.js'
        });
        map.addMapping({
          generated: {
            line: 2,
            column: 18
          },
          original: {
            line: 1,
            column: 21
          },
          source: 'two.js',
          name: 'n'
        });
        map.addMapping({
          generated: {
            line: 2,
            column: 21
          },
          original: {
            line: 2,
            column: 3
          },
          source: 'two.js'
        });
        map.addMapping({
          generated: {
            line: 2,
            column: 28
          },
          original: {
            line: 2,
            column: 10
          },
          source: 'two.js',
          name: 'n'
        });
        map = JSON.parse(map.toString());
        util.assertEqualMaps(assert, map, util.testMap);
      };
      exports['test that adding a mapping with an empty string name does not break generation'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'generated-foo.js',
          sourceRoot: '.'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 1
          },
          source: 'bar.js',
          original: {
            line: 1,
            column: 1
          },
          name: ''
        });
        assert.doesNotThrow(function() {
          JSON.parse(map.toString());
        });
      };
      exports['test that source content can be set'] = function(assert) {
        var map = new SourceMapGenerator({
          file: 'min.js',
          sourceRoot: '/the/root'
        });
        map.addMapping({
          generated: {
            line: 1,
            column: 1
          },
          original: {
            line: 1,
            column: 1
          },
          source: 'one.js'
        });
        map.addMapping({
          generated: {
            line: 2,
            column: 1
          },
          original: {
            line: 1,
            column: 1
          },
          source: 'two.js'
        });
        map.setSourceContent('one.js', 'one file content');
        map = JSON.parse(map.toString());
        assert.equal(map.sources[0], 'one.js');
        assert.equal(map.sources[1], 'two.js');
        assert.equal(map.sourcesContent[0], 'one file content');
        assert.equal(map.sourcesContent[1], null);
      };
      exports['test .fromSourceMap'] = function(assert) {
        var map = SourceMapGenerator.fromSourceMap(new SourceMapConsumer(util.testMap));
        util.assertEqualMaps(assert, map.toJSON(), util.testMap);
      };
      exports['test .fromSourceMap with sourcesContent'] = function(assert) {
        var map = SourceMapGenerator.fromSourceMap(new SourceMapConsumer(util.testMapWithSourcesContent));
        util.assertEqualMaps(assert, map.toJSON(), util.testMapWithSourcesContent);
      };
      exports['test applySourceMap'] = function(assert) {
        var node = new SourceNode(null, null, null, [new SourceNode(2, 0, 'fileX', 'lineX2\n'), 'genA1\n', new SourceNode(2, 0, 'fileY', 'lineY2\n'), 'genA2\n', new SourceNode(1, 0, 'fileX', 'lineX1\n'), 'genA3\n', new SourceNode(1, 0, 'fileY', 'lineY1\n')]);
        var mapStep1 = node.toStringWithSourceMap({file: 'fileA'}).map;
        mapStep1.setSourceContent('fileX', 'lineX1\nlineX2\n');
        mapStep1 = mapStep1.toJSON();
        node = new SourceNode(null, null, null, ['gen1\n', new SourceNode(1, 0, 'fileA', 'lineA1\n'), new SourceNode(2, 0, 'fileA', 'lineA2\n'), new SourceNode(3, 0, 'fileA', 'lineA3\n'), new SourceNode(4, 0, 'fileA', 'lineA4\n'), new SourceNode(1, 0, 'fileB', 'lineB1\n'), new SourceNode(2, 0, 'fileB', 'lineB2\n'), 'gen2\n']);
        var mapStep2 = node.toStringWithSourceMap({file: 'fileGen'}).map;
        mapStep2.setSourceContent('fileB', 'lineB1\nlineB2\n');
        mapStep2 = mapStep2.toJSON();
        node = new SourceNode(null, null, null, ['gen1\n', new SourceNode(2, 0, 'fileX', 'lineA1\n'), new SourceNode(2, 0, 'fileA', 'lineA2\n'), new SourceNode(2, 0, 'fileY', 'lineA3\n'), new SourceNode(4, 0, 'fileA', 'lineA4\n'), new SourceNode(1, 0, 'fileB', 'lineB1\n'), new SourceNode(2, 0, 'fileB', 'lineB2\n'), 'gen2\n']);
        var expectedMap = node.toStringWithSourceMap({file: 'fileGen'}).map;
        expectedMap.setSourceContent('fileX', 'lineX1\nlineX2\n');
        expectedMap.setSourceContent('fileB', 'lineB1\nlineB2\n');
        expectedMap = expectedMap.toJSON();
        var generator = SourceMapGenerator.fromSourceMap(new SourceMapConsumer(mapStep2));
        generator.applySourceMap(new SourceMapConsumer(mapStep1));
        var actualMap = generator.toJSON();
        util.assertEqualMaps(assert, actualMap, expectedMap);
      };
      exports['test applySourceMap throws when file is missing'] = function(assert) {
        var map = new SourceMapGenerator({file: 'test.js'});
        var map2 = new SourceMapGenerator();
        assert.throws(function() {
          map.applySourceMap(new SourceMapConsumer(map2.toJSON()));
        });
      };
      exports['test the two additional parameters of applySourceMap'] = function(assert) {
        var bundleMap = new SourceMapGenerator({file: 'bundle.js'});
        bundleMap.addMapping({
          generated: {
            line: 3,
            column: 3
          },
          original: {
            line: 2,
            column: 2
          },
          source: '../../coffee/foo.coffee'
        });
        bundleMap.setSourceContent('../../coffee/foo.coffee', 'foo coffee');
        bundleMap.addMapping({
          generated: {
            line: 13,
            column: 13
          },
          original: {
            line: 12,
            column: 12
          },
          source: '/bar.coffee'
        });
        bundleMap.setSourceContent('/bar.coffee', 'bar coffee');
        bundleMap.addMapping({
          generated: {
            line: 23,
            column: 23
          },
          original: {
            line: 22,
            column: 22
          },
          source: 'http://www.example.com/baz.coffee'
        });
        bundleMap.setSourceContent('http://www.example.com/baz.coffee', 'baz coffee');
        bundleMap = new SourceMapConsumer(bundleMap.toJSON());
        var minifiedMap = new SourceMapGenerator({
          file: 'bundle.min.js',
          sourceRoot: '..'
        });
        minifiedMap.addMapping({
          generated: {
            line: 1,
            column: 1
          },
          original: {
            line: 3,
            column: 3
          },
          source: 'temp/bundle.js'
        });
        minifiedMap.addMapping({
          generated: {
            line: 11,
            column: 11
          },
          original: {
            line: 13,
            column: 13
          },
          source: 'temp/bundle.js'
        });
        minifiedMap.addMapping({
          generated: {
            line: 21,
            column: 21
          },
          original: {
            line: 23,
            column: 23
          },
          source: 'temp/bundle.js'
        });
        minifiedMap = new SourceMapConsumer(minifiedMap.toJSON());
        var expectedMap = function(sources) {
          var map = new SourceMapGenerator({
            file: 'bundle.min.js',
            sourceRoot: '..'
          });
          map.addMapping({
            generated: {
              line: 1,
              column: 1
            },
            original: {
              line: 2,
              column: 2
            },
            source: sources[0]
          });
          map.setSourceContent(sources[0], 'foo coffee');
          map.addMapping({
            generated: {
              line: 11,
              column: 11
            },
            original: {
              line: 12,
              column: 12
            },
            source: sources[1]
          });
          map.setSourceContent(sources[1], 'bar coffee');
          map.addMapping({
            generated: {
              line: 21,
              column: 21
            },
            original: {
              line: 22,
              column: 22
            },
            source: sources[2]
          });
          map.setSourceContent(sources[2], 'baz coffee');
          return map.toJSON();
        };
        var actualMap = function(aSourceMapPath) {
          var map = SourceMapGenerator.fromSourceMap(minifiedMap);
          map.applySourceMap(bundleMap, '../temp/bundle.js', aSourceMapPath);
          return map.toJSON();
        };
        util.assertEqualMaps(assert, actualMap('../temp/temp_maps'), expectedMap(['coffee/foo.coffee', '/bar.coffee', 'http://www.example.com/baz.coffee']));
        util.assertEqualMaps(assert, actualMap('/app/temp/temp_maps'), expectedMap(['/app/coffee/foo.coffee', '/bar.coffee', 'http://www.example.com/baz.coffee']));
        util.assertEqualMaps(assert, actualMap('http://foo.org/app/temp/temp_maps'), expectedMap(['http://foo.org/app/coffee/foo.coffee', 'http://foo.org/bar.coffee', 'http://www.example.com/baz.coffee']));
        util.assertEqualMaps(assert, actualMap(), expectedMap(['../coffee/foo.coffee', '/bar.coffee', 'http://www.example.com/baz.coffee']));
        util.assertEqualMaps(assert, actualMap(''), expectedMap(['../coffee/foo.coffee', '/bar.coffee', 'http://www.example.com/baz.coffee']));
        util.assertEqualMaps(assert, actualMap('.'), expectedMap(['../coffee/foo.coffee', '/bar.coffee', 'http://www.example.com/baz.coffee']));
        util.assertEqualMaps(assert, actualMap('./'), expectedMap(['../coffee/foo.coffee', '/bar.coffee', 'http://www.example.com/baz.coffee']));
      };
      exports['test applySourceMap name handling'] = function(assert) {
        var assertName = function(coffeeName, jsName, expectedName) {
          var minifiedMap = new SourceMapGenerator({file: 'test.js.min'});
          minifiedMap.addMapping({
            generated: {
              line: 1,
              column: 4
            },
            original: {
              line: 1,
              column: 4
            },
            source: 'test.js',
            name: jsName
          });
          var coffeeMap = new SourceMapGenerator({file: 'test.js'});
          coffeeMap.addMapping({
            generated: {
              line: 1,
              column: 4
            },
            original: {
              line: 1,
              column: 0
            },
            source: 'test.coffee',
            name: coffeeName
          });
          minifiedMap.applySourceMap(new SourceMapConsumer(coffeeMap.toJSON()));
          new SourceMapConsumer(minifiedMap.toJSON()).eachMapping(function(mapping) {
            assert.equal(mapping.name, expectedName);
          });
        };
        assertName(null, 'foo', 'foo');
        assertName('foo', 'coffee$foo', 'foo');
        assertName('foo', null, 'foo');
        assertName(null, null, null);
      };
      exports['test sorting with duplicate generated mappings'] = function(assert) {
        var map = new SourceMapGenerator({file: 'test.js'});
        map.addMapping({
          generated: {
            line: 3,
            column: 0
          },
          original: {
            line: 2,
            column: 0
          },
          source: 'a.js'
        });
        map.addMapping({generated: {
            line: 2,
            column: 0
          }});
        map.addMapping({generated: {
            line: 2,
            column: 0
          }});
        map.addMapping({
          generated: {
            line: 1,
            column: 0
          },
          original: {
            line: 1,
            column: 0
          },
          source: 'a.js'
        });
        util.assertEqualMaps(assert, map.toJSON(), {
          version: 3,
          file: 'test.js',
          sources: ['a.js'],
          names: [],
          mappings: 'AAAA;A;AACA'
        });
      };
      exports['test ignore duplicate mappings.'] = function(assert) {
        var init = {
          file: 'min.js',
          sourceRoot: '/the/root'
        };
        var map1,
            map2;
        var nullMapping1 = {generated: {
            line: 1,
            column: 0
          }};
        var nullMapping2 = {generated: {
            line: 2,
            column: 2
          }};
        map1 = new SourceMapGenerator(init);
        map2 = new SourceMapGenerator(init);
        map1.addMapping(nullMapping1);
        map1.addMapping(nullMapping1);
        map2.addMapping(nullMapping1);
        util.assertEqualMaps(assert, map1.toJSON(), map2.toJSON());
        map1.addMapping(nullMapping2);
        map1.addMapping(nullMapping1);
        map2.addMapping(nullMapping2);
        util.assertEqualMaps(assert, map1.toJSON(), map2.toJSON());
        var srcMapping1 = {
          generated: {
            line: 1,
            column: 0
          },
          original: {
            line: 11,
            column: 0
          },
          source: 'srcMapping1.js'
        };
        var srcMapping2 = {
          generated: {
            line: 2,
            column: 2
          },
          original: {
            line: 11,
            column: 0
          },
          source: 'srcMapping2.js'
        };
        map1 = new SourceMapGenerator(init);
        map2 = new SourceMapGenerator(init);
        map1.addMapping(srcMapping1);
        map1.addMapping(srcMapping1);
        map2.addMapping(srcMapping1);
        util.assertEqualMaps(assert, map1.toJSON(), map2.toJSON());
        map1.addMapping(srcMapping2);
        map1.addMapping(srcMapping1);
        map2.addMapping(srcMapping2);
        util.assertEqualMaps(assert, map1.toJSON(), map2.toJSON());
        var fullMapping1 = {
          generated: {
            line: 1,
            column: 0
          },
          original: {
            line: 11,
            column: 0
          },
          source: 'fullMapping1.js',
          name: 'fullMapping1'
        };
        var fullMapping2 = {
          generated: {
            line: 2,
            column: 2
          },
          original: {
            line: 11,
            column: 0
          },
          source: 'fullMapping2.js',
          name: 'fullMapping2'
        };
        map1 = new SourceMapGenerator(init);
        map2 = new SourceMapGenerator(init);
        map1.addMapping(fullMapping1);
        map1.addMapping(fullMapping1);
        map2.addMapping(fullMapping1);
        util.assertEqualMaps(assert, map1.toJSON(), map2.toJSON());
        map1.addMapping(fullMapping2);
        map1.addMapping(fullMapping1);
        map2.addMapping(fullMapping2);
        util.assertEqualMaps(assert, map1.toJSON(), map2.toJSON());
      };
      exports['test github issue #72, check for duplicate names or sources'] = function(assert) {
        var map = new SourceMapGenerator({file: 'test.js'});
        map.addMapping({
          generated: {
            line: 1,
            column: 1
          },
          original: {
            line: 2,
            column: 2
          },
          source: 'a.js',
          name: 'foo'
        });
        map.addMapping({
          generated: {
            line: 3,
            column: 3
          },
          original: {
            line: 4,
            column: 4
          },
          source: 'a.js',
          name: 'foo'
        });
        util.assertEqualMaps(assert, map.toJSON(), {
          version: 3,
          file: 'test.js',
          sources: ['a.js'],
          names: ['foo'],
          mappings: 'CACEA;;GAEEA'
        });
      };
      exports['test setting sourcesContent to null when already null'] = function(assert) {
        var smg = new SourceMapGenerator({file: "foo.js"});
        assert.doesNotThrow(function() {
          smg.setSourceContent("bar.js", null);
        });
      };
      exports['test applySourceMap with unexact match'] = function(assert) {
        var map1 = new SourceMapGenerator({file: 'bundled-source'});
        map1.addMapping({
          generated: {
            line: 1,
            column: 4
          },
          original: {
            line: 1,
            column: 4
          },
          source: 'transformed-source'
        });
        map1.addMapping({
          generated: {
            line: 2,
            column: 4
          },
          original: {
            line: 2,
            column: 4
          },
          source: 'transformed-source'
        });
        var map2 = new SourceMapGenerator({file: 'transformed-source'});
        map2.addMapping({
          generated: {
            line: 2,
            column: 0
          },
          original: {
            line: 1,
            column: 0
          },
          source: 'original-source'
        });
        var expectedMap = new SourceMapGenerator({file: 'bundled-source'});
        expectedMap.addMapping({
          generated: {
            line: 1,
            column: 4
          },
          original: {
            line: 1,
            column: 4
          },
          source: 'transformed-source'
        });
        expectedMap.addMapping({
          generated: {
            line: 2,
            column: 4
          },
          original: {
            line: 1,
            column: 0
          },
          source: 'original-source'
        });
        map1.applySourceMap(new SourceMapConsumer(map2.toJSON()));
        util.assertEqualMaps(assert, map1.toJSON(), expectedMap.toJSON());
      };
      exports['test issue #192'] = function(assert) {
        var generator = new SourceMapGenerator();
        generator.addMapping({
          source: 'a.js',
          generated: {
            line: 1,
            column: 10
          },
          original: {
            line: 1,
            column: 10
          }
        });
        generator.addMapping({
          source: 'b.js',
          generated: {
            line: 1,
            column: 10
          },
          original: {
            line: 2,
            column: 20
          }
        });
        var consumer = new SourceMapConsumer(generator.toJSON());
        var n = 0;
        consumer.eachMapping(function() {
          n++;
        });
        assert.equal(n, 2, "Should not de-duplicate mappings that have the same " + "generated positions, but different original positions.");
      };
    }
  }, function(module, exports, __webpack_require__) {
    {
      var base64VLQ = __webpack_require__(2);
      var util = __webpack_require__(4);
      var ArraySet = __webpack_require__(5).ArraySet;
      var MappingList = __webpack_require__(6).MappingList;
      function SourceMapGenerator(aArgs) {
        if (!aArgs) {
          aArgs = {};
        }
        this._file = util.getArg(aArgs, 'file', null);
        this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
        this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
        this._sources = new ArraySet();
        this._names = new ArraySet();
        this._mappings = new MappingList();
        this._sourcesContents = null;
      }
      SourceMapGenerator.prototype._version = 3;
      SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
        var sourceRoot = aSourceMapConsumer.sourceRoot;
        var generator = new SourceMapGenerator({
          file: aSourceMapConsumer.file,
          sourceRoot: sourceRoot
        });
        aSourceMapConsumer.eachMapping(function(mapping) {
          var newMapping = {generated: {
              line: mapping.generatedLine,
              column: mapping.generatedColumn
            }};
          if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) {
              newMapping.source = util.relative(sourceRoot, newMapping.source);
            }
            newMapping.original = {
              line: mapping.originalLine,
              column: mapping.originalColumn
            };
            if (mapping.name != null) {
              newMapping.name = mapping.name;
            }
          }
          generator.addMapping(newMapping);
        });
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            generator.setSourceContent(sourceFile, content);
          }
        });
        return generator;
      };
      SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
        var generated = util.getArg(aArgs, 'generated');
        var original = util.getArg(aArgs, 'original', null);
        var source = util.getArg(aArgs, 'source', null);
        var name = util.getArg(aArgs, 'name', null);
        if (!this._skipValidation) {
          this._validateMapping(generated, original, source, name);
        }
        if (source != null && !this._sources.has(source)) {
          this._sources.add(source);
        }
        if (name != null && !this._names.has(name)) {
          this._names.add(name);
        }
        this._mappings.add({
          generatedLine: generated.line,
          generatedColumn: generated.column,
          originalLine: original != null && original.line,
          originalColumn: original != null && original.column,
          source: source,
          name: name
        });
      };
      SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
        var source = aSourceFile;
        if (this._sourceRoot != null) {
          source = util.relative(this._sourceRoot, source);
        }
        if (aSourceContent != null) {
          if (!this._sourcesContents) {
            this._sourcesContents = {};
          }
          this._sourcesContents[util.toSetString(source)] = aSourceContent;
        } else if (this._sourcesContents) {
          delete this._sourcesContents[util.toSetString(source)];
          if (Object.keys(this._sourcesContents).length === 0) {
            this._sourcesContents = null;
          }
        }
      };
      SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
        var sourceFile = aSourceFile;
        if (aSourceFile == null) {
          if (aSourceMapConsumer.file == null) {
            throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
          }
          sourceFile = aSourceMapConsumer.file;
        }
        var sourceRoot = this._sourceRoot;
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        var newSources = new ArraySet();
        var newNames = new ArraySet();
        this._mappings.unsortedForEach(function(mapping) {
          if (mapping.source === sourceFile && mapping.originalLine != null) {
            var original = aSourceMapConsumer.originalPositionFor({
              line: mapping.originalLine,
              column: mapping.originalColumn
            });
            if (original.source != null) {
              mapping.source = original.source;
              if (aSourceMapPath != null) {
                mapping.source = util.join(aSourceMapPath, mapping.source);
              }
              if (sourceRoot != null) {
                mapping.source = util.relative(sourceRoot, mapping.source);
              }
              mapping.originalLine = original.line;
              mapping.originalColumn = original.column;
              if (original.name != null) {
                mapping.name = original.name;
              }
            }
          }
          var source = mapping.source;
          if (source != null && !newSources.has(source)) {
            newSources.add(source);
          }
          var name = mapping.name;
          if (name != null && !newNames.has(name)) {
            newNames.add(name);
          }
        }, this);
        this._sources = newSources;
        this._names = newNames;
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            if (aSourceMapPath != null) {
              sourceFile = util.join(aSourceMapPath, sourceFile);
            }
            if (sourceRoot != null) {
              sourceFile = util.relative(sourceRoot, sourceFile);
            }
            this.setSourceContent(sourceFile, content);
          }
        }, this);
      };
      SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
        if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
          return;
        } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
          return;
        } else {
          throw new Error('Invalid mapping: ' + JSON.stringify({
            generated: aGenerated,
            source: aSource,
            original: aOriginal,
            name: aName
          }));
        }
      };
      SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
        var previousGeneratedColumn = 0;
        var previousGeneratedLine = 1;
        var previousOriginalColumn = 0;
        var previousOriginalLine = 0;
        var previousName = 0;
        var previousSource = 0;
        var result = '';
        var mapping;
        var nameIdx;
        var sourceIdx;
        var mappings = this._mappings.toArray();
        for (var i = 0,
            len = mappings.length; i < len; i++) {
          mapping = mappings[i];
          if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while (mapping.generatedLine !== previousGeneratedLine) {
              result += ';';
              previousGeneratedLine++;
            }
          } else {
            if (i > 0) {
              if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                continue;
              }
              result += ',';
            }
          }
          result += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
          previousGeneratedColumn = mapping.generatedColumn;
          if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            result += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            result += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            result += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
              nameIdx = this._names.indexOf(mapping.name);
              result += base64VLQ.encode(nameIdx - previousName);
              previousName = nameIdx;
            }
          }
        }
        return result;
      };
      SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
        return aSources.map(function(source) {
          if (!this._sourcesContents) {
            return null;
          }
          if (aSourceRoot != null) {
            source = util.relative(aSourceRoot, source);
          }
          var key = util.toSetString(source);
          return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
        }, this);
      };
      SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
        var map = {
          version: this._version,
          sources: this._sources.toArray(),
          names: this._names.toArray(),
          mappings: this._serializeMappings()
        };
        if (this._file != null) {
          map.file = this._file;
        }
        if (this._sourceRoot != null) {
          map.sourceRoot = this._sourceRoot;
        }
        if (this._sourcesContents) {
          map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
        }
        return map;
      };
      SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
        return JSON.stringify(this.toJSON());
      };
      exports.SourceMapGenerator = SourceMapGenerator;
    }
  }, function(module, exports, __webpack_require__) {
    {
      var base64 = __webpack_require__(3);
      var VLQ_BASE_SHIFT = 5;
      var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
      var VLQ_BASE_MASK = VLQ_BASE - 1;
      var VLQ_CONTINUATION_BIT = VLQ_BASE;
      function toVLQSigned(aValue) {
        return aValue < 0 ? ((-aValue) << 1) + 1 : (aValue << 1) + 0;
      }
      function fromVLQSigned(aValue) {
        var isNegative = (aValue & 1) === 1;
        var shifted = aValue >> 1;
        return isNegative ? -shifted : shifted;
      }
      exports.encode = function base64VLQ_encode(aValue) {
        var encoded = "";
        var digit;
        var vlq = toVLQSigned(aValue);
        do {
          digit = vlq & VLQ_BASE_MASK;
          vlq >>>= VLQ_BASE_SHIFT;
          if (vlq > 0) {
            digit |= VLQ_CONTINUATION_BIT;
          }
          encoded += base64.encode(digit);
        } while (vlq > 0);
        return encoded;
      };
      exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
        var strLen = aStr.length;
        var result = 0;
        var shift = 0;
        var continuation,
            digit;
        do {
          if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
          }
          digit = base64.decode(aStr.charCodeAt(aIndex++));
          if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
          }
          continuation = !!(digit & VLQ_CONTINUATION_BIT);
          digit &= VLQ_BASE_MASK;
          result = result + (digit << shift);
          shift += VLQ_BASE_SHIFT;
        } while (continuation);
        aOutParam.value = fromVLQSigned(result);
        aOutParam.rest = aIndex;
      };
    }
  }, function(module, exports) {
    {
      var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
      exports.encode = function(number) {
        if (0 <= number && number < intToCharMap.length) {
          return intToCharMap[number];
        }
        throw new TypeError("Must be between 0 and 63: " + number);
      };
      exports.decode = function(charCode) {
        var bigA = 65;
        var bigZ = 90;
        var littleA = 97;
        var littleZ = 122;
        var zero = 48;
        var nine = 57;
        var plus = 43;
        var slash = 47;
        var littleOffset = 26;
        var numberOffset = 52;
        if (bigA <= charCode && charCode <= bigZ) {
          return (charCode - bigA);
        }
        if (littleA <= charCode && charCode <= littleZ) {
          return (charCode - littleA + littleOffset);
        }
        if (zero <= charCode && charCode <= nine) {
          return (charCode - zero + numberOffset);
        }
        if (charCode == plus) {
          return 62;
        }
        if (charCode == slash) {
          return 63;
        }
        return -1;
      };
    }
  }, function(module, exports) {
    {
      function getArg(aArgs, aName, aDefaultValue) {
        if (aName in aArgs) {
          return aArgs[aName];
        } else if (arguments.length === 3) {
          return aDefaultValue;
        } else {
          throw new Error('"' + aName + '" is a required argument.');
        }
      }
      exports.getArg = getArg;
      var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
      var dataUrlRegexp = /^data:.+\,.+$/;
      function urlParse(aUrl) {
        var match = aUrl.match(urlRegexp);
        if (!match) {
          return null;
        }
        return {
          scheme: match[1],
          auth: match[2],
          host: match[3],
          port: match[4],
          path: match[5]
        };
      }
      exports.urlParse = urlParse;
      function urlGenerate(aParsedUrl) {
        var url = '';
        if (aParsedUrl.scheme) {
          url += aParsedUrl.scheme + ':';
        }
        url += '//';
        if (aParsedUrl.auth) {
          url += aParsedUrl.auth + '@';
        }
        if (aParsedUrl.host) {
          url += aParsedUrl.host;
        }
        if (aParsedUrl.port) {
          url += ":" + aParsedUrl.port;
        }
        if (aParsedUrl.path) {
          url += aParsedUrl.path;
        }
        return url;
      }
      exports.urlGenerate = urlGenerate;
      function normalize(aPath) {
        var path = aPath;
        var url = urlParse(aPath);
        if (url) {
          if (!url.path) {
            return aPath;
          }
          path = url.path;
        }
        var isAbsolute = exports.isAbsolute(path);
        var parts = path.split(/\/+/);
        for (var part,
            up = 0,
            i = parts.length - 1; i >= 0; i--) {
          part = parts[i];
          if (part === '.') {
            parts.splice(i, 1);
          } else if (part === '..') {
            up++;
          } else if (up > 0) {
            if (part === '') {
              parts.splice(i + 1, up);
              up = 0;
            } else {
              parts.splice(i, 2);
              up--;
            }
          }
        }
        path = parts.join('/');
        if (path === '') {
          path = isAbsolute ? '/' : '.';
        }
        if (url) {
          url.path = path;
          return urlGenerate(url);
        }
        return path;
      }
      exports.normalize = normalize;
      function join(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        if (aPath === "") {
          aPath = ".";
        }
        var aPathUrl = urlParse(aPath);
        var aRootUrl = urlParse(aRoot);
        if (aRootUrl) {
          aRoot = aRootUrl.path || '/';
        }
        if (aPathUrl && !aPathUrl.scheme) {
          if (aRootUrl) {
            aPathUrl.scheme = aRootUrl.scheme;
          }
          return urlGenerate(aPathUrl);
        }
        if (aPathUrl || aPath.match(dataUrlRegexp)) {
          return aPath;
        }
        if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
          aRootUrl.host = aPath;
          return urlGenerate(aRootUrl);
        }
        var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);
        if (aRootUrl) {
          aRootUrl.path = joined;
          return urlGenerate(aRootUrl);
        }
        return joined;
      }
      exports.join = join;
      exports.isAbsolute = function(aPath) {
        return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
      };
      function relative(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        aRoot = aRoot.replace(/\/$/, '');
        var level = 0;
        while (aPath.indexOf(aRoot + '/') !== 0) {
          var index = aRoot.lastIndexOf("/");
          if (index < 0) {
            return aPath;
          }
          aRoot = aRoot.slice(0, index);
          if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
            return aPath;
          }
          ++level;
        }
        return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
      }
      exports.relative = relative;
      function toSetString(aStr) {
        return '$' + aStr;
      }
      exports.toSetString = toSetString;
      function fromSetString(aStr) {
        return aStr.substr(1);
      }
      exports.fromSetString = fromSetString;
      function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
        var cmp = mappingA.source - mappingB.source;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0 || onlyCompareOriginal) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        return mappingA.name - mappingB.name;
      }
      exports.compareByOriginalPositions = compareByOriginalPositions;
      function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0 || onlyCompareGenerated) {
          return cmp;
        }
        cmp = mappingA.source - mappingB.source;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return mappingA.name - mappingB.name;
      }
      exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
      function strcmp(aStr1, aStr2) {
        if (aStr1 === aStr2) {
          return 0;
        }
        if (aStr1 > aStr2) {
          return 1;
        }
        return -1;
      }
      function compareByGeneratedPositionsInflated(mappingA, mappingB) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    }
  }, function(module, exports, __webpack_require__) {
    {
      var util = __webpack_require__(4);
      function ArraySet() {
        this._array = [];
        this._set = {};
      }
      ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
        var set = new ArraySet();
        for (var i = 0,
            len = aArray.length; i < len; i++) {
          set.add(aArray[i], aAllowDuplicates);
        }
        return set;
      };
      ArraySet.prototype.size = function ArraySet_size() {
        return Object.getOwnPropertyNames(this._set).length;
      };
      ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
        var sStr = util.toSetString(aStr);
        var isDuplicate = this._set.hasOwnProperty(sStr);
        var idx = this._array.length;
        if (!isDuplicate || aAllowDuplicates) {
          this._array.push(aStr);
        }
        if (!isDuplicate) {
          this._set[sStr] = idx;
        }
      };
      ArraySet.prototype.has = function ArraySet_has(aStr) {
        var sStr = util.toSetString(aStr);
        return this._set.hasOwnProperty(sStr);
      };
      ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
        var sStr = util.toSetString(aStr);
        if (this._set.hasOwnProperty(sStr)) {
          return this._set[sStr];
        }
        throw new Error('"' + aStr + '" is not in the set.');
      };
      ArraySet.prototype.at = function ArraySet_at(aIdx) {
        if (aIdx >= 0 && aIdx < this._array.length) {
          return this._array[aIdx];
        }
        throw new Error('No element indexed by ' + aIdx);
      };
      ArraySet.prototype.toArray = function ArraySet_toArray() {
        return this._array.slice();
      };
      exports.ArraySet = ArraySet;
    }
  }, function(module, exports, __webpack_require__) {
    {
      var util = __webpack_require__(4);
      function generatedPositionAfter(mappingA, mappingB) {
        var lineA = mappingA.generatedLine;
        var lineB = mappingB.generatedLine;
        var columnA = mappingA.generatedColumn;
        var columnB = mappingB.generatedColumn;
        return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
      }
      function MappingList() {
        this._array = [];
        this._sorted = true;
        this._last = {
          generatedLine: -1,
          generatedColumn: 0
        };
      }
      MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
        this._array.forEach(aCallback, aThisArg);
      };
      MappingList.prototype.add = function MappingList_add(aMapping) {
        if (generatedPositionAfter(this._last, aMapping)) {
          this._last = aMapping;
          this._array.push(aMapping);
        } else {
          this._sorted = false;
          this._array.push(aMapping);
        }
      };
      MappingList.prototype.toArray = function MappingList_toArray() {
        if (!this._sorted) {
          this._array.sort(util.compareByGeneratedPositionsInflated);
          this._sorted = true;
        }
        return this._array;
      };
      exports.MappingList = MappingList;
    }
  }, function(module, exports, __webpack_require__) {
    {
      var util = __webpack_require__(4);
      var binarySearch = __webpack_require__(8);
      var ArraySet = __webpack_require__(5).ArraySet;
      var base64VLQ = __webpack_require__(2);
      var quickSort = __webpack_require__(9).quickSort;
      function SourceMapConsumer(aSourceMap) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === 'string') {
          sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
        }
        return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
      }
      SourceMapConsumer.fromSourceMap = function(aSourceMap) {
        return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
      };
      SourceMapConsumer.prototype._version = 3;
      SourceMapConsumer.prototype.__generatedMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {get: function() {
          if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__generatedMappings;
        }});
      SourceMapConsumer.prototype.__originalMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {get: function() {
          if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__originalMappings;
        }});
      SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
        var c = aStr.charAt(index);
        return c === ";" || c === ",";
      };
      SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        throw new Error("Subclasses must implement _parseMappings");
      };
      SourceMapConsumer.GENERATED_ORDER = 1;
      SourceMapConsumer.ORIGINAL_ORDER = 2;
      SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
      SourceMapConsumer.LEAST_UPPER_BOUND = 2;
      SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
        var context = aContext || null;
        var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
        var mappings;
        switch (order) {
          case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
          case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
          default:
            throw new Error("Unknown order of iteration.");
        }
        var sourceRoot = this.sourceRoot;
        mappings.map(function(mapping) {
          var source = mapping.source === null ? null : this._sources.at(mapping.source);
          if (source != null && sourceRoot != null) {
            source = util.join(sourceRoot, source);
          }
          return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
          };
        }, this).forEach(aCallback, context);
      };
      SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
        var line = util.getArg(aArgs, 'line');
        var needle = {
          source: util.getArg(aArgs, 'source'),
          originalLine: line,
          originalColumn: util.getArg(aArgs, 'column', 0)
        };
        if (this.sourceRoot != null) {
          needle.source = util.relative(this.sourceRoot, needle.source);
        }
        if (!this._sources.has(needle.source)) {
          return [];
        }
        needle.source = this._sources.indexOf(needle.source);
        var mappings = [];
        var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
        if (index >= 0) {
          var mapping = this._originalMappings[index];
          if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            while (mapping && mapping.originalLine === originalLine) {
              mappings.push({
                line: util.getArg(mapping, 'generatedLine', null),
                column: util.getArg(mapping, 'generatedColumn', null),
                lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
              });
              mapping = this._originalMappings[++index];
            }
          } else {
            var originalColumn = mapping.originalColumn;
            while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
              mappings.push({
                line: util.getArg(mapping, 'generatedLine', null),
                column: util.getArg(mapping, 'generatedColumn', null),
                lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
              });
              mapping = this._originalMappings[++index];
            }
          }
        }
        return mappings;
      };
      exports.SourceMapConsumer = SourceMapConsumer;
      function BasicSourceMapConsumer(aSourceMap) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === 'string') {
          sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
        }
        var version = util.getArg(sourceMap, 'version');
        var sources = util.getArg(sourceMap, 'sources');
        var names = util.getArg(sourceMap, 'names', []);
        var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
        var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
        var mappings = util.getArg(sourceMap, 'mappings');
        var file = util.getArg(sourceMap, 'file', null);
        if (version != this._version) {
          throw new Error('Unsupported version: ' + version);
        }
        sources = sources.map(util.normalize).map(function(source) {
          return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
        });
        this._names = ArraySet.fromArray(names, true);
        this._sources = ArraySet.fromArray(sources, true);
        this.sourceRoot = sourceRoot;
        this.sourcesContent = sourcesContent;
        this._mappings = mappings;
        this.file = file;
      }
      BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
      BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
        var smc = Object.create(BasicSourceMapConsumer.prototype);
        var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
        var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
        smc.sourceRoot = aSourceMap._sourceRoot;
        smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
        smc.file = aSourceMap._file;
        var generatedMappings = aSourceMap._mappings.toArray().slice();
        var destGeneratedMappings = smc.__generatedMappings = [];
        var destOriginalMappings = smc.__originalMappings = [];
        for (var i = 0,
            length = generatedMappings.length; i < length; i++) {
          var srcMapping = generatedMappings[i];
          var destMapping = new Mapping;
          destMapping.generatedLine = srcMapping.generatedLine;
          destMapping.generatedColumn = srcMapping.generatedColumn;
          if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) {
              destMapping.name = names.indexOf(srcMapping.name);
            }
            destOriginalMappings.push(destMapping);
          }
          destGeneratedMappings.push(destMapping);
        }
        quickSort(smc.__originalMappings, util.compareByOriginalPositions);
        return smc;
      };
      BasicSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {get: function() {
          return this._sources.toArray().map(function(s) {
            return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
          }, this);
        }});
      function Mapping() {
        this.generatedLine = 0;
        this.generatedColumn = 0;
        this.source = null;
        this.originalLine = null;
        this.originalColumn = null;
        this.name = null;
      }
      BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        var generatedLine = 1;
        var previousGeneratedColumn = 0;
        var previousOriginalLine = 0;
        var previousOriginalColumn = 0;
        var previousSource = 0;
        var previousName = 0;
        var length = aStr.length;
        var index = 0;
        var cachedSegments = {};
        var temp = {};
        var originalMappings = [];
        var generatedMappings = [];
        var mapping,
            str,
            segment,
            end,
            value;
        while (index < length) {
          if (aStr.charAt(index) === ';') {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
          } else if (aStr.charAt(index) === ',') {
            index++;
          } else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            for (end = index; end < length; end++) {
              if (this._charIsMappingSeparator(aStr, end)) {
                break;
              }
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) {
              index += str.length;
            } else {
              segment = [];
              while (index < end) {
                base64VLQ.decode(aStr, index, temp);
                value = temp.value;
                index = temp.rest;
                segment.push(value);
              }
              if (segment.length === 2) {
                throw new Error('Found a source, but no line and column');
              }
              if (segment.length === 3) {
                throw new Error('Found a source and line, but no column');
              }
              cachedSegments[str] = segment;
            }
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
              mapping.source = previousSource + segment[1];
              previousSource += segment[1];
              mapping.originalLine = previousOriginalLine + segment[2];
              previousOriginalLine = mapping.originalLine;
              mapping.originalLine += 1;
              mapping.originalColumn = previousOriginalColumn + segment[3];
              previousOriginalColumn = mapping.originalColumn;
              if (segment.length > 4) {
                mapping.name = previousName + segment[4];
                previousName += segment[4];
              }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === 'number') {
              originalMappings.push(mapping);
            }
          }
        }
        quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
        this.__generatedMappings = generatedMappings;
        quickSort(originalMappings, util.compareByOriginalPositions);
        this.__originalMappings = originalMappings;
      };
      BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
        if (aNeedle[aLineName] <= 0) {
          throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
        }
        if (aNeedle[aColumnName] < 0) {
          throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
        }
        return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
      };
      BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
        for (var index = 0; index < this._generatedMappings.length; ++index) {
          var mapping = this._generatedMappings[index];
          if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
              mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
              continue;
            }
          }
          mapping.lastGeneratedColumn = Infinity;
        }
      };
      BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, 'line'),
          generatedColumn: util.getArg(aArgs, 'column')
        };
        var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
        if (index >= 0) {
          var mapping = this._generatedMappings[index];
          if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, 'source', null);
            if (source !== null) {
              source = this._sources.at(source);
              if (this.sourceRoot != null) {
                source = util.join(this.sourceRoot, source);
              }
            }
            var name = util.getArg(mapping, 'name', null);
            if (name !== null) {
              name = this._names.at(name);
            }
            return {
              source: source,
              line: util.getArg(mapping, 'originalLine', null),
              column: util.getArg(mapping, 'originalColumn', null),
              name: name
            };
          }
        }
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      };
      BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
        if (!this.sourcesContent) {
          return false;
        }
        return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
          return sc == null;
        });
      };
      BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        if (!this.sourcesContent) {
          return null;
        }
        if (this.sourceRoot != null) {
          aSource = util.relative(this.sourceRoot, aSource);
        }
        if (this._sources.has(aSource)) {
          return this.sourcesContent[this._sources.indexOf(aSource)];
        }
        var url;
        if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
          var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
          if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
          }
          if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
            return this.sourcesContent[this._sources.indexOf("/" + aSource)];
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + aSource + '" is not in the SourceMap.');
        }
      };
      BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
        var source = util.getArg(aArgs, 'source');
        if (this.sourceRoot != null) {
          source = util.relative(this.sourceRoot, source);
        }
        if (!this._sources.has(source)) {
          return {
            line: null,
            column: null,
            lastColumn: null
          };
        }
        source = this._sources.indexOf(source);
        var needle = {
          source: source,
          originalLine: util.getArg(aArgs, 'line'),
          originalColumn: util.getArg(aArgs, 'column')
        };
        var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
        if (index >= 0) {
          var mapping = this._originalMappings[index];
          if (mapping.source === needle.source) {
            return {
              line: util.getArg(mapping, 'generatedLine', null),
              column: util.getArg(mapping, 'generatedColumn', null),
              lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
            };
          }
        }
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      };
      exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
      function IndexedSourceMapConsumer(aSourceMap) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === 'string') {
          sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
        }
        var version = util.getArg(sourceMap, 'version');
        var sections = util.getArg(sourceMap, 'sections');
        if (version != this._version) {
          throw new Error('Unsupported version: ' + version);
        }
        this._sources = new ArraySet();
        this._names = new ArraySet();
        var lastOffset = {
          line: -1,
          column: 0
        };
        this._sections = sections.map(function(s) {
          if (s.url) {
            throw new Error('Support for url field in sections not implemented.');
          }
          var offset = util.getArg(s, 'offset');
          var offsetLine = util.getArg(offset, 'line');
          var offsetColumn = util.getArg(offset, 'column');
          if (offsetLine < lastOffset.line || (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
            throw new Error('Section offsets must be ordered and non-overlapping.');
          }
          lastOffset = offset;
          return {
            generatedOffset: {
              generatedLine: offsetLine + 1,
              generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, 'map'))
          };
        });
      }
      IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
      IndexedSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {get: function() {
          var sources = [];
          for (var i = 0; i < this._sections.length; i++) {
            for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
              sources.push(this._sections[i].consumer.sources[j]);
            }
          }
          return sources;
        }});
      IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, 'line'),
          generatedColumn: util.getArg(aArgs, 'column')
        };
        var sectionIndex = binarySearch.search(needle, this._sections, function(needle, section) {
          var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
          if (cmp) {
            return cmp;
          }
          return (needle.generatedColumn - section.generatedOffset.generatedColumn);
        });
        var section = this._sections[sectionIndex];
        if (!section) {
          return {
            source: null,
            line: null,
            column: null,
            name: null
          };
        }
        return section.consumer.originalPositionFor({
          line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
          column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          bias: aArgs.bias
        });
      };
      IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
        return this._sections.every(function(s) {
          return s.consumer.hasContentsOfAllSources();
        });
      };
      IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var content = section.consumer.sourceContentFor(aSource, true);
          if (content) {
            return content;
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + aSource + '" is not in the SourceMap.');
        }
      };
      IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
            continue;
          }
          var generatedPosition = section.consumer.generatedPositionFor(aArgs);
          if (generatedPosition) {
            var ret = {
              line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
              column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
          }
        }
        return {
          line: null,
          column: null
        };
      };
      IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var sectionMappings = section.consumer._generatedMappings;
          for (var j = 0; j < sectionMappings.length; j++) {
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            if (section.consumer.sourceRoot !== null) {
              source = util.join(section.consumer.sourceRoot, source);
            }
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = section.consumer._names.at(mapping.name);
            this._names.add(name);
            name = this._names.indexOf(name);
            var adjustedMapping = {
              source: source,
              generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
              generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
              originalLine: mapping.originalLine,
              originalColumn: mapping.originalColumn,
              name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === 'number') {
              this.__originalMappings.push(adjustedMapping);
            }
          }
        }
        quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
        quickSort(this.__originalMappings, util.compareByOriginalPositions);
      };
      exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
    }
  }, function(module, exports) {
    {
      exports.GREATEST_LOWER_BOUND = 1;
      exports.LEAST_UPPER_BOUND = 2;
      function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
        var mid = Math.floor((aHigh - aLow) / 2) + aLow;
        var cmp = aCompare(aNeedle, aHaystack[mid], true);
        if (cmp === 0) {
          return mid;
        } else if (cmp > 0) {
          if (aHigh - mid > 1) {
            return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return aHigh < aHaystack.length ? aHigh : -1;
          } else {
            return mid;
          }
        } else {
          if (mid - aLow > 1) {
            return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return mid;
          } else {
            return aLow < 0 ? -1 : aLow;
          }
        }
      }
      exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
        if (aHaystack.length === 0) {
          return -1;
        }
        var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
        if (index < 0) {
          return -1;
        }
        while (index - 1 >= 0) {
          if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
            break;
          }
          --index;
        }
        return index;
      };
    }
  }, function(module, exports) {
    {
      function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
      }
      function randomIntInRange(low, high) {
        return Math.round(low + (Math.random() * (high - low)));
      }
      function doQuickSort(ary, comparator, p, r) {
        if (p < r) {
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
          swap(ary, pivotIndex, r);
          var pivot = ary[r];
          for (var j = p; j < r; j++) {
            if (comparator(ary[j], pivot) <= 0) {
              i += 1;
              swap(ary, i, j);
            }
          }
          swap(ary, i + 1, j);
          var q = i + 1;
          doQuickSort(ary, comparator, p, q - 1);
          doQuickSort(ary, comparator, q + 1, r);
        }
      }
      exports.quickSort = function(ary, comparator) {
        doQuickSort(ary, comparator, 0, ary.length - 1);
      };
    }
  }, function(module, exports, __webpack_require__) {
    {
      var SourceMapGenerator = __webpack_require__(1).SourceMapGenerator;
      var util = __webpack_require__(4);
      var REGEX_NEWLINE = /(\r?\n)/;
      var NEWLINE_CODE = 10;
      var isSourceNode = "$$$isSourceNode$$$";
      function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
        this.children = [];
        this.sourceContents = {};
        this.line = aLine == null ? null : aLine;
        this.column = aColumn == null ? null : aColumn;
        this.source = aSource == null ? null : aSource;
        this.name = aName == null ? null : aName;
        this[isSourceNode] = true;
        if (aChunks != null)
          this.add(aChunks);
      }
      SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
        var node = new SourceNode();
        var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
        var shiftNextLine = function() {
          var lineContents = remainingLines.shift();
          var newLine = remainingLines.shift() || "";
          return lineContents + newLine;
        };
        var lastGeneratedLine = 1,
            lastGeneratedColumn = 0;
        var lastMapping = null;
        aSourceMapConsumer.eachMapping(function(mapping) {
          if (lastMapping !== null) {
            if (lastGeneratedLine < mapping.generatedLine) {
              addMappingWithCode(lastMapping, shiftNextLine());
              lastGeneratedLine++;
              lastGeneratedColumn = 0;
            } else {
              var nextLine = remainingLines[0];
              var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
              remainingLines[0] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
              lastGeneratedColumn = mapping.generatedColumn;
              addMappingWithCode(lastMapping, code);
              lastMapping = mapping;
              return;
            }
          }
          while (lastGeneratedLine < mapping.generatedLine) {
            node.add(shiftNextLine());
            lastGeneratedLine++;
          }
          if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[0];
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[0] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
          }
          lastMapping = mapping;
        }, this);
        if (remainingLines.length > 0) {
          if (lastMapping) {
            addMappingWithCode(lastMapping, shiftNextLine());
          }
          node.add(remainingLines.join(""));
        }
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            if (aRelativePath != null) {
              sourceFile = util.join(aRelativePath, sourceFile);
            }
            node.setSourceContent(sourceFile, content);
          }
        });
        return node;
        function addMappingWithCode(mapping, code) {
          if (mapping === null || mapping.source === undefined) {
            node.add(code);
          } else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
          }
        }
      };
      SourceNode.prototype.add = function SourceNode_add(aChunk) {
        if (Array.isArray(aChunk)) {
          aChunk.forEach(function(chunk) {
            this.add(chunk);
          }, this);
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          if (aChunk) {
            this.children.push(aChunk);
          }
        } else {
          throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
        }
        return this;
      };
      SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
        if (Array.isArray(aChunk)) {
          for (var i = aChunk.length - 1; i >= 0; i--) {
            this.prepend(aChunk[i]);
          }
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          this.children.unshift(aChunk);
        } else {
          throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
        }
        return this;
      };
      SourceNode.prototype.walk = function SourceNode_walk(aFn) {
        var chunk;
        for (var i = 0,
            len = this.children.length; i < len; i++) {
          chunk = this.children[i];
          if (chunk[isSourceNode]) {
            chunk.walk(aFn);
          } else {
            if (chunk !== '') {
              aFn(chunk, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name
              });
            }
          }
        }
      };
      SourceNode.prototype.join = function SourceNode_join(aSep) {
        var newChildren;
        var i;
        var len = this.children.length;
        if (len > 0) {
          newChildren = [];
          for (i = 0; i < len - 1; i++) {
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
          }
          newChildren.push(this.children[i]);
          this.children = newChildren;
        }
        return this;
      };
      SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
        var lastChild = this.children[this.children.length - 1];
        if (lastChild[isSourceNode]) {
          lastChild.replaceRight(aPattern, aReplacement);
        } else if (typeof lastChild === 'string') {
          this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
        } else {
          this.children.push(''.replace(aPattern, aReplacement));
        }
        return this;
      };
      SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
        this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
      };
      SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
        for (var i = 0,
            len = this.children.length; i < len; i++) {
          if (this.children[i][isSourceNode]) {
            this.children[i].walkSourceContents(aFn);
          }
        }
        var sources = Object.keys(this.sourceContents);
        for (var i = 0,
            len = sources.length; i < len; i++) {
          aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
        }
      };
      SourceNode.prototype.toString = function SourceNode_toString() {
        var str = "";
        this.walk(function(chunk) {
          str += chunk;
        });
        return str;
      };
      SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
        var generated = {
          code: "",
          line: 1,
          column: 0
        };
        var map = new SourceMapGenerator(aArgs);
        var sourceMappingActive = false;
        var lastOriginalSource = null;
        var lastOriginalLine = null;
        var lastOriginalColumn = null;
        var lastOriginalName = null;
        this.walk(function(chunk, original) {
          generated.code += chunk;
          if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
          } else if (sourceMappingActive) {
            map.addMapping({generated: {
                line: generated.line,
                column: generated.column
              }});
            lastOriginalSource = null;
            sourceMappingActive = false;
          }
          for (var idx = 0,
              length = chunk.length; idx < length; idx++) {
            if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
              generated.line++;
              generated.column = 0;
              if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
              } else if (sourceMappingActive) {
                map.addMapping({
                  source: original.source,
                  original: {
                    line: original.line,
                    column: original.column
                  },
                  generated: {
                    line: generated.line,
                    column: generated.column
                  },
                  name: original.name
                });
              }
            } else {
              generated.column++;
            }
          }
        });
        this.walkSourceContents(function(sourceFile, sourceContent) {
          map.setSourceContent(sourceFile, sourceContent);
        });
        return {
          code: generated.code,
          map: map
        };
      };
      exports.SourceNode = SourceNode;
    }
  }, function(module, exports, __webpack_require__) {
    {
      var util = __webpack_require__(4);
      exports.testGeneratedCode = " ONE.foo=function(a){return baz(a);};\n" + " TWO.inc=function(a){return a+1;};";
      exports.testMap = {
        version: 3,
        file: 'min.js',
        names: ['bar', 'baz', 'n'],
        sources: ['one.js', 'two.js'],
        sourceRoot: '/the/root',
        mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
      };
      exports.testMapNoSourceRoot = {
        version: 3,
        file: 'min.js',
        names: ['bar', 'baz', 'n'],
        sources: ['one.js', 'two.js'],
        mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
      };
      exports.testMapEmptySourceRoot = {
        version: 3,
        file: 'min.js',
        names: ['bar', 'baz', 'n'],
        sources: ['one.js', 'two.js'],
        sourceRoot: '',
        mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
      };
      exports.indexedTestMap = {
        version: 3,
        file: 'min.js',
        sections: [{
          offset: {
            line: 0,
            column: 0
          },
          map: {
            version: 3,
            sources: ["one.js"],
            sourcesContent: [' ONE.foo = function (bar) {\n' + '   return baz(bar);\n' + ' };'],
            names: ["bar", "baz"],
            mappings: "CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID",
            file: "min.js",
            sourceRoot: "/the/root"
          }
        }, {
          offset: {
            line: 1,
            column: 0
          },
          map: {
            version: 3,
            sources: ["two.js"],
            sourcesContent: [' TWO.inc = function (n) {\n' + '   return n + 1;\n' + ' };'],
            names: ["n"],
            mappings: "CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOA",
            file: "min.js",
            sourceRoot: "/the/root"
          }
        }]
      };
      exports.indexedTestMapDifferentSourceRoots = {
        version: 3,
        file: 'min.js',
        sections: [{
          offset: {
            line: 0,
            column: 0
          },
          map: {
            version: 3,
            sources: ["one.js"],
            sourcesContent: [' ONE.foo = function (bar) {\n' + '   return baz(bar);\n' + ' };'],
            names: ["bar", "baz"],
            mappings: "CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID",
            file: "min.js",
            sourceRoot: "/the/root"
          }
        }, {
          offset: {
            line: 1,
            column: 0
          },
          map: {
            version: 3,
            sources: ["two.js"],
            sourcesContent: [' TWO.inc = function (n) {\n' + '   return n + 1;\n' + ' };'],
            names: ["n"],
            mappings: "CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOA",
            file: "min.js",
            sourceRoot: "/different/root"
          }
        }]
      };
      exports.testMapWithSourcesContent = {
        version: 3,
        file: 'min.js',
        names: ['bar', 'baz', 'n'],
        sources: ['one.js', 'two.js'],
        sourcesContent: [' ONE.foo = function (bar) {\n' + '   return baz(bar);\n' + ' };', ' TWO.inc = function (n) {\n' + '   return n + 1;\n' + ' };'],
        sourceRoot: '/the/root',
        mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
      };
      exports.testMapRelativeSources = {
        version: 3,
        file: 'min.js',
        names: ['bar', 'baz', 'n'],
        sources: ['./one.js', './two.js'],
        sourcesContent: [' ONE.foo = function (bar) {\n' + '   return baz(bar);\n' + ' };', ' TWO.inc = function (n) {\n' + '   return n + 1;\n' + ' };'],
        sourceRoot: '/the/root',
        mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
      };
      exports.emptyMap = {
        version: 3,
        file: 'min.js',
        names: [],
        sources: [],
        mappings: ''
      };
      function assertMapping(generatedLine, generatedColumn, originalSource, originalLine, originalColumn, name, bias, map, assert, dontTestGenerated, dontTestOriginal) {
        if (!dontTestOriginal) {
          var origMapping = map.originalPositionFor({
            line: generatedLine,
            column: generatedColumn,
            bias: bias
          });
          assert.equal(origMapping.name, name, 'Incorrect name, expected ' + JSON.stringify(name) + ', got ' + JSON.stringify(origMapping.name));
          assert.equal(origMapping.line, originalLine, 'Incorrect line, expected ' + JSON.stringify(originalLine) + ', got ' + JSON.stringify(origMapping.line));
          assert.equal(origMapping.column, originalColumn, 'Incorrect column, expected ' + JSON.stringify(originalColumn) + ', got ' + JSON.stringify(origMapping.column));
          var expectedSource;
          if (originalSource && map.sourceRoot && originalSource.indexOf(map.sourceRoot) === 0) {
            expectedSource = originalSource;
          } else if (originalSource) {
            expectedSource = map.sourceRoot ? util.join(map.sourceRoot, originalSource) : originalSource;
          } else {
            expectedSource = null;
          }
          assert.equal(origMapping.source, expectedSource, 'Incorrect source, expected ' + JSON.stringify(expectedSource) + ', got ' + JSON.stringify(origMapping.source));
        }
        if (!dontTestGenerated) {
          var genMapping = map.generatedPositionFor({
            source: originalSource,
            line: originalLine,
            column: originalColumn,
            bias: bias
          });
          assert.equal(genMapping.line, generatedLine, 'Incorrect line, expected ' + JSON.stringify(generatedLine) + ', got ' + JSON.stringify(genMapping.line));
          assert.equal(genMapping.column, generatedColumn, 'Incorrect column, expected ' + JSON.stringify(generatedColumn) + ', got ' + JSON.stringify(genMapping.column));
        }
      }
      exports.assertMapping = assertMapping;
      function assertEqualMaps(assert, actualMap, expectedMap) {
        assert.equal(actualMap.version, expectedMap.version, "version mismatch");
        assert.equal(actualMap.file, expectedMap.file, "file mismatch");
        assert.equal(actualMap.names.length, expectedMap.names.length, "names length mismatch: " + actualMap.names.join(", ") + " != " + expectedMap.names.join(", "));
        for (var i = 0; i < actualMap.names.length; i++) {
          assert.equal(actualMap.names[i], expectedMap.names[i], "names[" + i + "] mismatch: " + actualMap.names.join(", ") + " != " + expectedMap.names.join(", "));
        }
        assert.equal(actualMap.sources.length, expectedMap.sources.length, "sources length mismatch: " + actualMap.sources.join(", ") + " != " + expectedMap.sources.join(", "));
        for (var i = 0; i < actualMap.sources.length; i++) {
          assert.equal(actualMap.sources[i], expectedMap.sources[i], "sources[" + i + "] length mismatch: " + actualMap.sources.join(", ") + " != " + expectedMap.sources.join(", "));
        }
        assert.equal(actualMap.sourceRoot, expectedMap.sourceRoot, "sourceRoot mismatch: " + actualMap.sourceRoot + " != " + expectedMap.sourceRoot);
        assert.equal(actualMap.mappings, expectedMap.mappings, "mappings mismatch:\nActual:   " + actualMap.mappings + "\nExpected: " + expectedMap.mappings);
        if (actualMap.sourcesContent) {
          assert.equal(actualMap.sourcesContent.length, expectedMap.sourcesContent.length, "sourcesContent length mismatch");
          for (var i = 0; i < actualMap.sourcesContent.length; i++) {
            assert.equal(actualMap.sourcesContent[i], expectedMap.sourcesContent[i], "sourcesContent[" + i + "] mismatch");
          }
        }
      }
      exports.assertEqualMaps = assertEqualMaps;
    }
  }]);
})(require('process'));

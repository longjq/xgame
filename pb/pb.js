/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof pb
         * @interface ILoginReq
         * @property {string|null} [mobile] LoginReq mobile
         * @property {string|null} [deviceId] LoginReq deviceId
         * @property {string|null} [password] LoginReq password
         * @property {string|null} [token] LoginReq token
         */

        /**
         * Constructs a new LoginReq.
         * @memberof pb
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {pb.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq mobile.
         * @member {string} mobile
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.mobile = "";

        /**
         * LoginReq deviceId.
         * @member {string} deviceId
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.deviceId = "";

        /**
         * LoginReq password.
         * @member {string} password
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.password = "";

        /**
         * LoginReq token.
         * @member {string} token
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.token = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof pb.LoginReq
         * @static
         * @param {pb.ILoginReq=} [properties] Properties to set
         * @returns {pb.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link pb.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginReq
         * @static
         * @param {pb.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceId);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link pb.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LoginReq
         * @static
         * @param {pb.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mobile = reader.string();
                    break;
                case 2:
                    message.deviceId = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof pb.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                if (!$util.isString(message.mobile))
                    return "mobile: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginReq)
                return object;
            var message = new $root.pb.LoginReq();
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.password != null)
                message.password = String(object.password);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginReq
         * @static
         * @param {pb.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mobile = "";
                object.deviceId = "";
                object.password = "";
                object.token = "";
            }
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof pb.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.LoginReq.DEF
         * @enum {string}
         * @property {number} ID=1 ID value
         */
        LoginReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ID"] = 1;
            return values;
        })();

        return LoginReq;
    })();

    pb.LoginResp = (function() {

        /**
         * Properties of a LoginResp.
         * @memberof pb
         * @interface ILoginResp
         * @property {number|null} [uid] LoginResp uid
         * @property {number|null} [session] LoginResp session
         */

        /**
         * Constructs a new LoginResp.
         * @memberof pb
         * @classdesc Represents a LoginResp.
         * @implements ILoginResp
         * @constructor
         * @param {pb.ILoginResp=} [properties] Properties to set
         */
        function LoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResp uid.
         * @member {number} uid
         * @memberof pb.LoginResp
         * @instance
         */
        LoginResp.prototype.uid = 0;

        /**
         * LoginResp session.
         * @member {number} session
         * @memberof pb.LoginResp
         * @instance
         */
        LoginResp.prototype.session = 0;

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @function create
         * @memberof pb.LoginResp
         * @static
         * @param {pb.ILoginResp=} [properties] Properties to set
         * @returns {pb.LoginResp} LoginResp instance
         */
        LoginResp.create = function create(properties) {
            return new LoginResp(properties);
        };

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link pb.LoginResp.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginResp
         * @static
         * @param {pb.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.session != null && message.hasOwnProperty("session"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.session);
            return writer;
        };

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link pb.LoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LoginResp
         * @static
         * @param {pb.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.session = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResp message.
         * @function verify
         * @memberof pb.LoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isInteger(message.session))
                    return "session: integer expected";
            return null;
        };

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginResp} LoginResp
         */
        LoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginResp)
                return object;
            var message = new $root.pb.LoginResp();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.session != null)
                message.session = object.session | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginResp
         * @static
         * @param {pb.LoginResp} message LoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.session = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };

        /**
         * Converts this LoginResp to JSON.
         * @function toJSON
         * @memberof pb.LoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.LoginResp.DEF
         * @enum {string}
         * @property {number} ID=2 ID value
         */
        LoginResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2] = "ID"] = 2;
            return values;
        })();

        return LoginResp;
    })();

    pb.ResetReq = (function() {

        /**
         * Properties of a ResetReq.
         * @memberof pb
         * @interface IResetReq
         * @property {string} mobile ResetReq mobile
         * @property {string} password ResetReq password
         * @property {string} verifyCode ResetReq verifyCode
         */

        /**
         * Constructs a new ResetReq.
         * @memberof pb
         * @classdesc Represents a ResetReq.
         * @implements IResetReq
         * @constructor
         * @param {pb.IResetReq=} [properties] Properties to set
         */
        function ResetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResetReq mobile.
         * @member {string} mobile
         * @memberof pb.ResetReq
         * @instance
         */
        ResetReq.prototype.mobile = "";

        /**
         * ResetReq password.
         * @member {string} password
         * @memberof pb.ResetReq
         * @instance
         */
        ResetReq.prototype.password = "";

        /**
         * ResetReq verifyCode.
         * @member {string} verifyCode
         * @memberof pb.ResetReq
         * @instance
         */
        ResetReq.prototype.verifyCode = "";

        /**
         * Creates a new ResetReq instance using the specified properties.
         * @function create
         * @memberof pb.ResetReq
         * @static
         * @param {pb.IResetReq=} [properties] Properties to set
         * @returns {pb.ResetReq} ResetReq instance
         */
        ResetReq.create = function create(properties) {
            return new ResetReq(properties);
        };

        /**
         * Encodes the specified ResetReq message. Does not implicitly {@link pb.ResetReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ResetReq
         * @static
         * @param {pb.IResetReq} message ResetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifyCode);
            return writer;
        };

        /**
         * Encodes the specified ResetReq message, length delimited. Does not implicitly {@link pb.ResetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ResetReq
         * @static
         * @param {pb.IResetReq} message ResetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ResetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ResetReq} ResetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ResetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mobile = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.verifyCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mobile"))
                throw $util.ProtocolError("missing required 'mobile'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            if (!message.hasOwnProperty("verifyCode"))
                throw $util.ProtocolError("missing required 'verifyCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a ResetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ResetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ResetReq} ResetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetReq message.
         * @function verify
         * @memberof pb.ResetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.mobile))
                return "mobile: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            if (!$util.isString(message.verifyCode))
                return "verifyCode: string expected";
            return null;
        };

        /**
         * Creates a ResetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ResetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ResetReq} ResetReq
         */
        ResetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ResetReq)
                return object;
            var message = new $root.pb.ResetReq();
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.password != null)
                message.password = String(object.password);
            if (object.verifyCode != null)
                message.verifyCode = String(object.verifyCode);
            return message;
        };

        /**
         * Creates a plain object from a ResetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ResetReq
         * @static
         * @param {pb.ResetReq} message ResetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mobile = "";
                object.password = "";
                object.verifyCode = "";
            }
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                object.verifyCode = message.verifyCode;
            return object;
        };

        /**
         * Converts this ResetReq to JSON.
         * @function toJSON
         * @memberof pb.ResetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.ResetReq.DEF
         * @enum {string}
         * @property {number} ID=20 ID value
         */
        ResetReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[20] = "ID"] = 20;
            return values;
        })();

        return ResetReq;
    })();

    pb.ResetResp = (function() {

        /**
         * Properties of a ResetResp.
         * @memberof pb
         * @interface IResetResp
         */

        /**
         * Constructs a new ResetResp.
         * @memberof pb
         * @classdesc Represents a ResetResp.
         * @implements IResetResp
         * @constructor
         * @param {pb.IResetResp=} [properties] Properties to set
         */
        function ResetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ResetResp instance using the specified properties.
         * @function create
         * @memberof pb.ResetResp
         * @static
         * @param {pb.IResetResp=} [properties] Properties to set
         * @returns {pb.ResetResp} ResetResp instance
         */
        ResetResp.create = function create(properties) {
            return new ResetResp(properties);
        };

        /**
         * Encodes the specified ResetResp message. Does not implicitly {@link pb.ResetResp.verify|verify} messages.
         * @function encode
         * @memberof pb.ResetResp
         * @static
         * @param {pb.IResetResp} message ResetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ResetResp message, length delimited. Does not implicitly {@link pb.ResetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ResetResp
         * @static
         * @param {pb.IResetResp} message ResetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ResetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ResetResp} ResetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ResetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ResetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ResetResp} ResetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetResp message.
         * @function verify
         * @memberof pb.ResetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ResetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ResetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ResetResp} ResetResp
         */
        ResetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ResetResp)
                return object;
            return new $root.pb.ResetResp();
        };

        /**
         * Creates a plain object from a ResetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ResetResp
         * @static
         * @param {pb.ResetResp} message ResetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ResetResp to JSON.
         * @function toJSON
         * @memberof pb.ResetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.ResetResp.DEF
         * @enum {string}
         * @property {number} ID=21 ID value
         */
        ResetResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[21] = "ID"] = 21;
            return values;
        })();

        return ResetResp;
    })();

    pb.FastLoginReq = (function() {

        /**
         * Properties of a FastLoginReq.
         * @memberof pb
         * @interface IFastLoginReq
         * @property {string} deviceId FastLoginReq deviceId
         * @property {string} token FastLoginReq token
         * @property {string} channel FastLoginReq channel
         * @property {string|null} [imei] FastLoginReq imei
         * @property {string|null} [imsi] FastLoginReq imsi
         */

        /**
         * Constructs a new FastLoginReq.
         * @memberof pb
         * @classdesc Represents a FastLoginReq.
         * @implements IFastLoginReq
         * @constructor
         * @param {pb.IFastLoginReq=} [properties] Properties to set
         */
        function FastLoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FastLoginReq deviceId.
         * @member {string} deviceId
         * @memberof pb.FastLoginReq
         * @instance
         */
        FastLoginReq.prototype.deviceId = "";

        /**
         * FastLoginReq token.
         * @member {string} token
         * @memberof pb.FastLoginReq
         * @instance
         */
        FastLoginReq.prototype.token = "";

        /**
         * FastLoginReq channel.
         * @member {string} channel
         * @memberof pb.FastLoginReq
         * @instance
         */
        FastLoginReq.prototype.channel = "";

        /**
         * FastLoginReq imei.
         * @member {string} imei
         * @memberof pb.FastLoginReq
         * @instance
         */
        FastLoginReq.prototype.imei = "";

        /**
         * FastLoginReq imsi.
         * @member {string} imsi
         * @memberof pb.FastLoginReq
         * @instance
         */
        FastLoginReq.prototype.imsi = "";

        /**
         * Creates a new FastLoginReq instance using the specified properties.
         * @function create
         * @memberof pb.FastLoginReq
         * @static
         * @param {pb.IFastLoginReq=} [properties] Properties to set
         * @returns {pb.FastLoginReq} FastLoginReq instance
         */
        FastLoginReq.create = function create(properties) {
            return new FastLoginReq(properties);
        };

        /**
         * Encodes the specified FastLoginReq message. Does not implicitly {@link pb.FastLoginReq.verify|verify} messages.
         * @function encode
         * @memberof pb.FastLoginReq
         * @static
         * @param {pb.IFastLoginReq} message FastLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FastLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.channel);
            if (message.imei != null && message.hasOwnProperty("imei"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.imei);
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.imsi);
            return writer;
        };

        /**
         * Encodes the specified FastLoginReq message, length delimited. Does not implicitly {@link pb.FastLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FastLoginReq
         * @static
         * @param {pb.IFastLoginReq} message FastLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FastLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FastLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FastLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FastLoginReq} FastLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FastLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FastLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                case 3:
                    message.channel = reader.string();
                    break;
                case 4:
                    message.imei = reader.string();
                    break;
                case 5:
                    message.imsi = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("deviceId"))
                throw $util.ProtocolError("missing required 'deviceId'", { instance: message });
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            if (!message.hasOwnProperty("channel"))
                throw $util.ProtocolError("missing required 'channel'", { instance: message });
            return message;
        };

        /**
         * Decodes a FastLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FastLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FastLoginReq} FastLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FastLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FastLoginReq message.
         * @function verify
         * @memberof pb.FastLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FastLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
            if (!$util.isString(message.token))
                return "token: string expected";
            if (!$util.isString(message.channel))
                return "channel: string expected";
            if (message.imei != null && message.hasOwnProperty("imei"))
                if (!$util.isString(message.imei))
                    return "imei: string expected";
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                if (!$util.isString(message.imsi))
                    return "imsi: string expected";
            return null;
        };

        /**
         * Creates a FastLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FastLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FastLoginReq} FastLoginReq
         */
        FastLoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FastLoginReq)
                return object;
            var message = new $root.pb.FastLoginReq();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.token != null)
                message.token = String(object.token);
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.imei != null)
                message.imei = String(object.imei);
            if (object.imsi != null)
                message.imsi = String(object.imsi);
            return message;
        };

        /**
         * Creates a plain object from a FastLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FastLoginReq
         * @static
         * @param {pb.FastLoginReq} message FastLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FastLoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deviceId = "";
                object.token = "";
                object.channel = "";
                object.imei = "";
                object.imsi = "";
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.imei != null && message.hasOwnProperty("imei"))
                object.imei = message.imei;
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                object.imsi = message.imsi;
            return object;
        };

        /**
         * Converts this FastLoginReq to JSON.
         * @function toJSON
         * @memberof pb.FastLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FastLoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.FastLoginReq.DEF
         * @enum {string}
         * @property {number} ID=3 ID value
         */
        FastLoginReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[3] = "ID"] = 3;
            return values;
        })();

        return FastLoginReq;
    })();

    pb.FastLoginResp = (function() {

        /**
         * Properties of a FastLoginResp.
         * @memberof pb
         * @interface IFastLoginResp
         * @property {number|null} [uid] FastLoginResp uid
         * @property {number|null} [session] FastLoginResp session
         */

        /**
         * Constructs a new FastLoginResp.
         * @memberof pb
         * @classdesc Represents a FastLoginResp.
         * @implements IFastLoginResp
         * @constructor
         * @param {pb.IFastLoginResp=} [properties] Properties to set
         */
        function FastLoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FastLoginResp uid.
         * @member {number} uid
         * @memberof pb.FastLoginResp
         * @instance
         */
        FastLoginResp.prototype.uid = 0;

        /**
         * FastLoginResp session.
         * @member {number} session
         * @memberof pb.FastLoginResp
         * @instance
         */
        FastLoginResp.prototype.session = 0;

        /**
         * Creates a new FastLoginResp instance using the specified properties.
         * @function create
         * @memberof pb.FastLoginResp
         * @static
         * @param {pb.IFastLoginResp=} [properties] Properties to set
         * @returns {pb.FastLoginResp} FastLoginResp instance
         */
        FastLoginResp.create = function create(properties) {
            return new FastLoginResp(properties);
        };

        /**
         * Encodes the specified FastLoginResp message. Does not implicitly {@link pb.FastLoginResp.verify|verify} messages.
         * @function encode
         * @memberof pb.FastLoginResp
         * @static
         * @param {pb.IFastLoginResp} message FastLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FastLoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.session != null && message.hasOwnProperty("session"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.session);
            return writer;
        };

        /**
         * Encodes the specified FastLoginResp message, length delimited. Does not implicitly {@link pb.FastLoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FastLoginResp
         * @static
         * @param {pb.IFastLoginResp} message FastLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FastLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FastLoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FastLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FastLoginResp} FastLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FastLoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FastLoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.session = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FastLoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FastLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FastLoginResp} FastLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FastLoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FastLoginResp message.
         * @function verify
         * @memberof pb.FastLoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FastLoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isInteger(message.session))
                    return "session: integer expected";
            return null;
        };

        /**
         * Creates a FastLoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FastLoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FastLoginResp} FastLoginResp
         */
        FastLoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FastLoginResp)
                return object;
            var message = new $root.pb.FastLoginResp();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.session != null)
                message.session = object.session | 0;
            return message;
        };

        /**
         * Creates a plain object from a FastLoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FastLoginResp
         * @static
         * @param {pb.FastLoginResp} message FastLoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FastLoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.session = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };

        /**
         * Converts this FastLoginResp to JSON.
         * @function toJSON
         * @memberof pb.FastLoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FastLoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.FastLoginResp.DEF
         * @enum {string}
         * @property {number} ID=4 ID value
         */
        FastLoginResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[4] = "ID"] = 4;
            return values;
        })();

        return FastLoginResp;
    })();

    pb.GetVerifyCodeReq = (function() {

        /**
         * Properties of a GetVerifyCodeReq.
         * @memberof pb
         * @interface IGetVerifyCodeReq
         * @property {string} mobile GetVerifyCodeReq mobile
         * @property {string} token GetVerifyCodeReq token
         */

        /**
         * Constructs a new GetVerifyCodeReq.
         * @memberof pb
         * @classdesc Represents a GetVerifyCodeReq.
         * @implements IGetVerifyCodeReq
         * @constructor
         * @param {pb.IGetVerifyCodeReq=} [properties] Properties to set
         */
        function GetVerifyCodeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVerifyCodeReq mobile.
         * @member {string} mobile
         * @memberof pb.GetVerifyCodeReq
         * @instance
         */
        GetVerifyCodeReq.prototype.mobile = "";

        /**
         * GetVerifyCodeReq token.
         * @member {string} token
         * @memberof pb.GetVerifyCodeReq
         * @instance
         */
        GetVerifyCodeReq.prototype.token = "";

        /**
         * Creates a new GetVerifyCodeReq instance using the specified properties.
         * @function create
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {pb.IGetVerifyCodeReq=} [properties] Properties to set
         * @returns {pb.GetVerifyCodeReq} GetVerifyCodeReq instance
         */
        GetVerifyCodeReq.create = function create(properties) {
            return new GetVerifyCodeReq(properties);
        };

        /**
         * Encodes the specified GetVerifyCodeReq message. Does not implicitly {@link pb.GetVerifyCodeReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {pb.IGetVerifyCodeReq} message GetVerifyCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVerifyCodeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified GetVerifyCodeReq message, length delimited. Does not implicitly {@link pb.GetVerifyCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {pb.IGetVerifyCodeReq} message GetVerifyCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVerifyCodeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVerifyCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetVerifyCodeReq} GetVerifyCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVerifyCodeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetVerifyCodeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mobile = reader.string();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mobile"))
                throw $util.ProtocolError("missing required 'mobile'", { instance: message });
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetVerifyCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetVerifyCodeReq} GetVerifyCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVerifyCodeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVerifyCodeReq message.
         * @function verify
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVerifyCodeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.mobile))
                return "mobile: string expected";
            if (!$util.isString(message.token))
                return "token: string expected";
            return null;
        };

        /**
         * Creates a GetVerifyCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetVerifyCodeReq} GetVerifyCodeReq
         */
        GetVerifyCodeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetVerifyCodeReq)
                return object;
            var message = new $root.pb.GetVerifyCodeReq();
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a GetVerifyCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetVerifyCodeReq
         * @static
         * @param {pb.GetVerifyCodeReq} message GetVerifyCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVerifyCodeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mobile = "";
                object.token = "";
            }
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this GetVerifyCodeReq to JSON.
         * @function toJSON
         * @memberof pb.GetVerifyCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVerifyCodeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.GetVerifyCodeReq.DEF
         * @enum {string}
         * @property {number} ID=7 ID value
         */
        GetVerifyCodeReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[7] = "ID"] = 7;
            return values;
        })();

        return GetVerifyCodeReq;
    })();

    pb.GetVerifyCodeResp = (function() {

        /**
         * Properties of a GetVerifyCodeResp.
         * @memberof pb
         * @interface IGetVerifyCodeResp
         */

        /**
         * Constructs a new GetVerifyCodeResp.
         * @memberof pb
         * @classdesc Represents a GetVerifyCodeResp.
         * @implements IGetVerifyCodeResp
         * @constructor
         * @param {pb.IGetVerifyCodeResp=} [properties] Properties to set
         */
        function GetVerifyCodeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetVerifyCodeResp instance using the specified properties.
         * @function create
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {pb.IGetVerifyCodeResp=} [properties] Properties to set
         * @returns {pb.GetVerifyCodeResp} GetVerifyCodeResp instance
         */
        GetVerifyCodeResp.create = function create(properties) {
            return new GetVerifyCodeResp(properties);
        };

        /**
         * Encodes the specified GetVerifyCodeResp message. Does not implicitly {@link pb.GetVerifyCodeResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {pb.IGetVerifyCodeResp} message GetVerifyCodeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVerifyCodeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetVerifyCodeResp message, length delimited. Does not implicitly {@link pb.GetVerifyCodeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {pb.IGetVerifyCodeResp} message GetVerifyCodeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVerifyCodeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVerifyCodeResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetVerifyCodeResp} GetVerifyCodeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVerifyCodeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetVerifyCodeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVerifyCodeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetVerifyCodeResp} GetVerifyCodeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVerifyCodeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVerifyCodeResp message.
         * @function verify
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVerifyCodeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetVerifyCodeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetVerifyCodeResp} GetVerifyCodeResp
         */
        GetVerifyCodeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetVerifyCodeResp)
                return object;
            return new $root.pb.GetVerifyCodeResp();
        };

        /**
         * Creates a plain object from a GetVerifyCodeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetVerifyCodeResp
         * @static
         * @param {pb.GetVerifyCodeResp} message GetVerifyCodeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVerifyCodeResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetVerifyCodeResp to JSON.
         * @function toJSON
         * @memberof pb.GetVerifyCodeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVerifyCodeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.GetVerifyCodeResp.DEF
         * @enum {string}
         * @property {number} ID=8 ID value
         */
        GetVerifyCodeResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[8] = "ID"] = 8;
            return values;
        })();

        return GetVerifyCodeResp;
    })();

    pb.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof pb
         * @interface IRegisterReq
         * @property {string} mobile RegisterReq mobile
         * @property {string} password RegisterReq password
         * @property {string} verifyCode RegisterReq verifyCode
         * @property {string} deviceId RegisterReq deviceId
         * @property {string|null} [channel] RegisterReq channel
         * @property {string|null} [imei] RegisterReq imei
         * @property {string|null} [imsi] RegisterReq imsi
         */

        /**
         * Constructs a new RegisterReq.
         * @memberof pb
         * @classdesc Represents a RegisterReq.
         * @implements IRegisterReq
         * @constructor
         * @param {pb.IRegisterReq=} [properties] Properties to set
         */
        function RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterReq mobile.
         * @member {string} mobile
         * @memberof pb.RegisterReq
         * @instance
         */
        RegisterReq.prototype.mobile = "";

        /**
         * RegisterReq password.
         * @member {string} password
         * @memberof pb.RegisterReq
         * @instance
         */
        RegisterReq.prototype.password = "";

        /**
         * RegisterReq verifyCode.
         * @member {string} verifyCode
         * @memberof pb.RegisterReq
         * @instance
         */
        RegisterReq.prototype.verifyCode = "";

        /**
         * RegisterReq deviceId.
         * @member {string} deviceId
         * @memberof pb.RegisterReq
         * @instance
         */
        RegisterReq.prototype.deviceId = "";

        /**
         * RegisterReq channel.
         * @member {string} channel
         * @memberof pb.RegisterReq
         * @instance
         */
        RegisterReq.prototype.channel = "";

        /**
         * RegisterReq imei.
         * @member {string} imei
         * @memberof pb.RegisterReq
         * @instance
         */
        RegisterReq.prototype.imei = "";

        /**
         * RegisterReq imsi.
         * @member {string} imsi
         * @memberof pb.RegisterReq
         * @instance
         */
        RegisterReq.prototype.imsi = "";

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @function create
         * @memberof pb.RegisterReq
         * @static
         * @param {pb.IRegisterReq=} [properties] Properties to set
         * @returns {pb.RegisterReq} RegisterReq instance
         */
        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link pb.RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof pb.RegisterReq
         * @static
         * @param {pb.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifyCode);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.channel);
            if (message.imei != null && message.hasOwnProperty("imei"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.imei);
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.imsi);
            return writer;
        };

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link pb.RegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RegisterReq
         * @static
         * @param {pb.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mobile = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.verifyCode = reader.string();
                    break;
                case 4:
                    message.deviceId = reader.string();
                    break;
                case 5:
                    message.channel = reader.string();
                    break;
                case 6:
                    message.imei = reader.string();
                    break;
                case 7:
                    message.imsi = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mobile"))
                throw $util.ProtocolError("missing required 'mobile'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            if (!message.hasOwnProperty("verifyCode"))
                throw $util.ProtocolError("missing required 'verifyCode'", { instance: message });
            if (!message.hasOwnProperty("deviceId"))
                throw $util.ProtocolError("missing required 'deviceId'", { instance: message });
            return message;
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterReq message.
         * @function verify
         * @memberof pb.RegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.mobile))
                return "mobile: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            if (!$util.isString(message.verifyCode))
                return "verifyCode: string expected";
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.imei != null && message.hasOwnProperty("imei"))
                if (!$util.isString(message.imei))
                    return "imei: string expected";
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                if (!$util.isString(message.imsi))
                    return "imsi: string expected";
            return null;
        };

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RegisterReq} RegisterReq
         */
        RegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RegisterReq)
                return object;
            var message = new $root.pb.RegisterReq();
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.password != null)
                message.password = String(object.password);
            if (object.verifyCode != null)
                message.verifyCode = String(object.verifyCode);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.imei != null)
                message.imei = String(object.imei);
            if (object.imsi != null)
                message.imsi = String(object.imsi);
            return message;
        };

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RegisterReq
         * @static
         * @param {pb.RegisterReq} message RegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mobile = "";
                object.password = "";
                object.verifyCode = "";
                object.deviceId = "";
                object.channel = "";
                object.imei = "";
                object.imsi = "";
            }
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                object.verifyCode = message.verifyCode;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.imei != null && message.hasOwnProperty("imei"))
                object.imei = message.imei;
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                object.imsi = message.imsi;
            return object;
        };

        /**
         * Converts this RegisterReq to JSON.
         * @function toJSON
         * @memberof pb.RegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.RegisterReq.DEF
         * @enum {string}
         * @property {number} ID=9 ID value
         */
        RegisterReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[9] = "ID"] = 9;
            return values;
        })();

        return RegisterReq;
    })();

    pb.RegisterResp = (function() {

        /**
         * Properties of a RegisterResp.
         * @memberof pb
         * @interface IRegisterResp
         * @property {number|null} [uid] RegisterResp uid
         * @property {number|null} [session] RegisterResp session
         */

        /**
         * Constructs a new RegisterResp.
         * @memberof pb
         * @classdesc Represents a RegisterResp.
         * @implements IRegisterResp
         * @constructor
         * @param {pb.IRegisterResp=} [properties] Properties to set
         */
        function RegisterResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterResp uid.
         * @member {number} uid
         * @memberof pb.RegisterResp
         * @instance
         */
        RegisterResp.prototype.uid = 0;

        /**
         * RegisterResp session.
         * @member {number} session
         * @memberof pb.RegisterResp
         * @instance
         */
        RegisterResp.prototype.session = 0;

        /**
         * Creates a new RegisterResp instance using the specified properties.
         * @function create
         * @memberof pb.RegisterResp
         * @static
         * @param {pb.IRegisterResp=} [properties] Properties to set
         * @returns {pb.RegisterResp} RegisterResp instance
         */
        RegisterResp.create = function create(properties) {
            return new RegisterResp(properties);
        };

        /**
         * Encodes the specified RegisterResp message. Does not implicitly {@link pb.RegisterResp.verify|verify} messages.
         * @function encode
         * @memberof pb.RegisterResp
         * @static
         * @param {pb.IRegisterResp} message RegisterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.session != null && message.hasOwnProperty("session"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.session);
            return writer;
        };

        /**
         * Encodes the specified RegisterResp message, length delimited. Does not implicitly {@link pb.RegisterResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RegisterResp
         * @static
         * @param {pb.IRegisterResp} message RegisterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RegisterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RegisterResp} RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RegisterResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.session = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RegisterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RegisterResp} RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterResp message.
         * @function verify
         * @memberof pb.RegisterResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isInteger(message.session))
                    return "session: integer expected";
            return null;
        };

        /**
         * Creates a RegisterResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RegisterResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RegisterResp} RegisterResp
         */
        RegisterResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RegisterResp)
                return object;
            var message = new $root.pb.RegisterResp();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.session != null)
                message.session = object.session | 0;
            return message;
        };

        /**
         * Creates a plain object from a RegisterResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RegisterResp
         * @static
         * @param {pb.RegisterResp} message RegisterResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.session = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };

        /**
         * Converts this RegisterResp to JSON.
         * @function toJSON
         * @memberof pb.RegisterResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.RegisterResp.DEF
         * @enum {string}
         * @property {number} ID=10 ID value
         */
        RegisterResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[10] = "ID"] = 10;
            return values;
        })();

        return RegisterResp;
    })();

    pb.ConnectGameServerReq = (function() {

        /**
         * Properties of a ConnectGameServerReq.
         * @memberof pb
         * @interface IConnectGameServerReq
         * @property {string} session ConnectGameServerReq session
         */

        /**
         * Constructs a new ConnectGameServerReq.
         * @memberof pb
         * @classdesc Represents a ConnectGameServerReq.
         * @implements IConnectGameServerReq
         * @constructor
         * @param {pb.IConnectGameServerReq=} [properties] Properties to set
         */
        function ConnectGameServerReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectGameServerReq session.
         * @member {string} session
         * @memberof pb.ConnectGameServerReq
         * @instance
         */
        ConnectGameServerReq.prototype.session = "";

        /**
         * Creates a new ConnectGameServerReq instance using the specified properties.
         * @function create
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {pb.IConnectGameServerReq=} [properties] Properties to set
         * @returns {pb.ConnectGameServerReq} ConnectGameServerReq instance
         */
        ConnectGameServerReq.create = function create(properties) {
            return new ConnectGameServerReq(properties);
        };

        /**
         * Encodes the specified ConnectGameServerReq message. Does not implicitly {@link pb.ConnectGameServerReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {pb.IConnectGameServerReq} message ConnectGameServerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGameServerReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            return writer;
        };

        /**
         * Encodes the specified ConnectGameServerReq message, length delimited. Does not implicitly {@link pb.ConnectGameServerReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {pb.IConnectGameServerReq} message ConnectGameServerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGameServerReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectGameServerReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnectGameServerReq} ConnectGameServerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGameServerReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnectGameServerReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("session"))
                throw $util.ProtocolError("missing required 'session'", { instance: message });
            return message;
        };

        /**
         * Decodes a ConnectGameServerReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnectGameServerReq} ConnectGameServerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGameServerReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectGameServerReq message.
         * @function verify
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectGameServerReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.session))
                return "session: string expected";
            return null;
        };

        /**
         * Creates a ConnectGameServerReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnectGameServerReq} ConnectGameServerReq
         */
        ConnectGameServerReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnectGameServerReq)
                return object;
            var message = new $root.pb.ConnectGameServerReq();
            if (object.session != null)
                message.session = String(object.session);
            return message;
        };

        /**
         * Creates a plain object from a ConnectGameServerReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnectGameServerReq
         * @static
         * @param {pb.ConnectGameServerReq} message ConnectGameServerReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectGameServerReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.session = "";
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };

        /**
         * Converts this ConnectGameServerReq to JSON.
         * @function toJSON
         * @memberof pb.ConnectGameServerReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectGameServerReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.ConnectGameServerReq.DEF
         * @enum {string}
         * @property {number} ID=40 ID value
         */
        ConnectGameServerReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[40] = "ID"] = 40;
            return values;
        })();

        return ConnectGameServerReq;
    })();

    pb.ConnectGameServerResp = (function() {

        /**
         * Properties of a ConnectGameServerResp.
         * @memberof pb
         * @interface IConnectGameServerResp
         * @property {number|Long|null} [serverTime] ConnectGameServerResp serverTime
         */

        /**
         * Constructs a new ConnectGameServerResp.
         * @memberof pb
         * @classdesc Represents a ConnectGameServerResp.
         * @implements IConnectGameServerResp
         * @constructor
         * @param {pb.IConnectGameServerResp=} [properties] Properties to set
         */
        function ConnectGameServerResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectGameServerResp serverTime.
         * @member {number|Long} serverTime
         * @memberof pb.ConnectGameServerResp
         * @instance
         */
        ConnectGameServerResp.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ConnectGameServerResp instance using the specified properties.
         * @function create
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {pb.IConnectGameServerResp=} [properties] Properties to set
         * @returns {pb.ConnectGameServerResp} ConnectGameServerResp instance
         */
        ConnectGameServerResp.create = function create(properties) {
            return new ConnectGameServerResp(properties);
        };

        /**
         * Encodes the specified ConnectGameServerResp message. Does not implicitly {@link pb.ConnectGameServerResp.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {pb.IConnectGameServerResp} message ConnectGameServerResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGameServerResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified ConnectGameServerResp message, length delimited. Does not implicitly {@link pb.ConnectGameServerResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {pb.IConnectGameServerResp} message ConnectGameServerResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGameServerResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectGameServerResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnectGameServerResp} ConnectGameServerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGameServerResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnectGameServerResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectGameServerResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnectGameServerResp} ConnectGameServerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGameServerResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectGameServerResp message.
         * @function verify
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectGameServerResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a ConnectGameServerResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnectGameServerResp} ConnectGameServerResp
         */
        ConnectGameServerResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnectGameServerResp)
                return object;
            var message = new $root.pb.ConnectGameServerResp();
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ConnectGameServerResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnectGameServerResp
         * @static
         * @param {pb.ConnectGameServerResp} message ConnectGameServerResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectGameServerResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            return object;
        };

        /**
         * Converts this ConnectGameServerResp to JSON.
         * @function toJSON
         * @memberof pb.ConnectGameServerResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectGameServerResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.ConnectGameServerResp.DEF
         * @enum {string}
         * @property {number} ID=41 ID value
         */
        ConnectGameServerResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[41] = "ID"] = 41;
            return values;
        })();

        return ConnectGameServerResp;
    })();

    pb.HeartbeatReq = (function() {

        /**
         * Properties of a HeartbeatReq.
         * @memberof pb
         * @interface IHeartbeatReq
         */

        /**
         * Constructs a new HeartbeatReq.
         * @memberof pb
         * @classdesc Represents a HeartbeatReq.
         * @implements IHeartbeatReq
         * @constructor
         * @param {pb.IHeartbeatReq=} [properties] Properties to set
         */
        function HeartbeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartbeatReq instance using the specified properties.
         * @function create
         * @memberof pb.HeartbeatReq
         * @static
         * @param {pb.IHeartbeatReq=} [properties] Properties to set
         * @returns {pb.HeartbeatReq} HeartbeatReq instance
         */
        HeartbeatReq.create = function create(properties) {
            return new HeartbeatReq(properties);
        };

        /**
         * Encodes the specified HeartbeatReq message. Does not implicitly {@link pb.HeartbeatReq.verify|verify} messages.
         * @function encode
         * @memberof pb.HeartbeatReq
         * @static
         * @param {pb.IHeartbeatReq} message HeartbeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatReq message, length delimited. Does not implicitly {@link pb.HeartbeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.HeartbeatReq
         * @static
         * @param {pb.IHeartbeatReq} message HeartbeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.HeartbeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.HeartbeatReq} HeartbeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.HeartbeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.HeartbeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.HeartbeatReq} HeartbeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatReq message.
         * @function verify
         * @memberof pb.HeartbeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartbeatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.HeartbeatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.HeartbeatReq} HeartbeatReq
         */
        HeartbeatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.HeartbeatReq)
                return object;
            return new $root.pb.HeartbeatReq();
        };

        /**
         * Creates a plain object from a HeartbeatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.HeartbeatReq
         * @static
         * @param {pb.HeartbeatReq} message HeartbeatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartbeatReq to JSON.
         * @function toJSON
         * @memberof pb.HeartbeatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.HeartbeatReq.DEF
         * @enum {string}
         * @property {number} ID=100 ID value
         */
        HeartbeatReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[100] = "ID"] = 100;
            return values;
        })();

        return HeartbeatReq;
    })();

    pb.HeartbeatResp = (function() {

        /**
         * Properties of a HeartbeatResp.
         * @memberof pb
         * @interface IHeartbeatResp
         */

        /**
         * Constructs a new HeartbeatResp.
         * @memberof pb
         * @classdesc Represents a HeartbeatResp.
         * @implements IHeartbeatResp
         * @constructor
         * @param {pb.IHeartbeatResp=} [properties] Properties to set
         */
        function HeartbeatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartbeatResp instance using the specified properties.
         * @function create
         * @memberof pb.HeartbeatResp
         * @static
         * @param {pb.IHeartbeatResp=} [properties] Properties to set
         * @returns {pb.HeartbeatResp} HeartbeatResp instance
         */
        HeartbeatResp.create = function create(properties) {
            return new HeartbeatResp(properties);
        };

        /**
         * Encodes the specified HeartbeatResp message. Does not implicitly {@link pb.HeartbeatResp.verify|verify} messages.
         * @function encode
         * @memberof pb.HeartbeatResp
         * @static
         * @param {pb.IHeartbeatResp} message HeartbeatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatResp message, length delimited. Does not implicitly {@link pb.HeartbeatResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.HeartbeatResp
         * @static
         * @param {pb.IHeartbeatResp} message HeartbeatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.HeartbeatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.HeartbeatResp} HeartbeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.HeartbeatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.HeartbeatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.HeartbeatResp} HeartbeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatResp message.
         * @function verify
         * @memberof pb.HeartbeatResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartbeatResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.HeartbeatResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.HeartbeatResp} HeartbeatResp
         */
        HeartbeatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.HeartbeatResp)
                return object;
            return new $root.pb.HeartbeatResp();
        };

        /**
         * Creates a plain object from a HeartbeatResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.HeartbeatResp
         * @static
         * @param {pb.HeartbeatResp} message HeartbeatResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartbeatResp to JSON.
         * @function toJSON
         * @memberof pb.HeartbeatResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.HeartbeatResp.DEF
         * @enum {string}
         * @property {number} ID=101 ID value
         */
        HeartbeatResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[101] = "ID"] = 101;
            return values;
        })();

        return HeartbeatResp;
    })();

    pb.GetServerTimeReq = (function() {

        /**
         * Properties of a GetServerTimeReq.
         * @memberof pb
         * @interface IGetServerTimeReq
         */

        /**
         * Constructs a new GetServerTimeReq.
         * @memberof pb
         * @classdesc Represents a GetServerTimeReq.
         * @implements IGetServerTimeReq
         * @constructor
         * @param {pb.IGetServerTimeReq=} [properties] Properties to set
         */
        function GetServerTimeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetServerTimeReq instance using the specified properties.
         * @function create
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {pb.IGetServerTimeReq=} [properties] Properties to set
         * @returns {pb.GetServerTimeReq} GetServerTimeReq instance
         */
        GetServerTimeReq.create = function create(properties) {
            return new GetServerTimeReq(properties);
        };

        /**
         * Encodes the specified GetServerTimeReq message. Does not implicitly {@link pb.GetServerTimeReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {pb.IGetServerTimeReq} message GetServerTimeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetServerTimeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetServerTimeReq message, length delimited. Does not implicitly {@link pb.GetServerTimeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {pb.IGetServerTimeReq} message GetServerTimeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetServerTimeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetServerTimeReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetServerTimeReq} GetServerTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetServerTimeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetServerTimeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetServerTimeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetServerTimeReq} GetServerTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetServerTimeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetServerTimeReq message.
         * @function verify
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetServerTimeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetServerTimeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetServerTimeReq} GetServerTimeReq
         */
        GetServerTimeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetServerTimeReq)
                return object;
            return new $root.pb.GetServerTimeReq();
        };

        /**
         * Creates a plain object from a GetServerTimeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetServerTimeReq
         * @static
         * @param {pb.GetServerTimeReq} message GetServerTimeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetServerTimeReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetServerTimeReq to JSON.
         * @function toJSON
         * @memberof pb.GetServerTimeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetServerTimeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.GetServerTimeReq.DEF
         * @enum {string}
         * @property {number} ID=106 ID value
         */
        GetServerTimeReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[106] = "ID"] = 106;
            return values;
        })();

        return GetServerTimeReq;
    })();

    pb.GetServerTimeResp = (function() {

        /**
         * Properties of a GetServerTimeResp.
         * @memberof pb
         * @interface IGetServerTimeResp
         * @property {number|Long|null} [serverTime] GetServerTimeResp serverTime
         */

        /**
         * Constructs a new GetServerTimeResp.
         * @memberof pb
         * @classdesc Represents a GetServerTimeResp.
         * @implements IGetServerTimeResp
         * @constructor
         * @param {pb.IGetServerTimeResp=} [properties] Properties to set
         */
        function GetServerTimeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetServerTimeResp serverTime.
         * @member {number|Long} serverTime
         * @memberof pb.GetServerTimeResp
         * @instance
         */
        GetServerTimeResp.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetServerTimeResp instance using the specified properties.
         * @function create
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {pb.IGetServerTimeResp=} [properties] Properties to set
         * @returns {pb.GetServerTimeResp} GetServerTimeResp instance
         */
        GetServerTimeResp.create = function create(properties) {
            return new GetServerTimeResp(properties);
        };

        /**
         * Encodes the specified GetServerTimeResp message. Does not implicitly {@link pb.GetServerTimeResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {pb.IGetServerTimeResp} message GetServerTimeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetServerTimeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified GetServerTimeResp message, length delimited. Does not implicitly {@link pb.GetServerTimeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {pb.IGetServerTimeResp} message GetServerTimeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetServerTimeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetServerTimeResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetServerTimeResp} GetServerTimeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetServerTimeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetServerTimeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetServerTimeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetServerTimeResp} GetServerTimeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetServerTimeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetServerTimeResp message.
         * @function verify
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetServerTimeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetServerTimeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetServerTimeResp} GetServerTimeResp
         */
        GetServerTimeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetServerTimeResp)
                return object;
            var message = new $root.pb.GetServerTimeResp();
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetServerTimeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetServerTimeResp
         * @static
         * @param {pb.GetServerTimeResp} message GetServerTimeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetServerTimeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            return object;
        };

        /**
         * Converts this GetServerTimeResp to JSON.
         * @function toJSON
         * @memberof pb.GetServerTimeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetServerTimeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.GetServerTimeResp.DEF
         * @enum {string}
         * @property {number} ID=107 ID value
         */
        GetServerTimeResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[107] = "ID"] = 107;
            return values;
        })();

        return GetServerTimeResp;
    })();

    pb.QuitGameServerReq = (function() {

        /**
         * Properties of a QuitGameServerReq.
         * @memberof pb
         * @interface IQuitGameServerReq
         */

        /**
         * Constructs a new QuitGameServerReq.
         * @memberof pb
         * @classdesc Represents a QuitGameServerReq.
         * @implements IQuitGameServerReq
         * @constructor
         * @param {pb.IQuitGameServerReq=} [properties] Properties to set
         */
        function QuitGameServerReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new QuitGameServerReq instance using the specified properties.
         * @function create
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {pb.IQuitGameServerReq=} [properties] Properties to set
         * @returns {pb.QuitGameServerReq} QuitGameServerReq instance
         */
        QuitGameServerReq.create = function create(properties) {
            return new QuitGameServerReq(properties);
        };

        /**
         * Encodes the specified QuitGameServerReq message. Does not implicitly {@link pb.QuitGameServerReq.verify|verify} messages.
         * @function encode
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {pb.IQuitGameServerReq} message QuitGameServerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitGameServerReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified QuitGameServerReq message, length delimited. Does not implicitly {@link pb.QuitGameServerReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {pb.IQuitGameServerReq} message QuitGameServerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitGameServerReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitGameServerReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.QuitGameServerReq} QuitGameServerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitGameServerReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.QuitGameServerReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitGameServerReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.QuitGameServerReq} QuitGameServerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitGameServerReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitGameServerReq message.
         * @function verify
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitGameServerReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a QuitGameServerReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.QuitGameServerReq} QuitGameServerReq
         */
        QuitGameServerReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.QuitGameServerReq)
                return object;
            return new $root.pb.QuitGameServerReq();
        };

        /**
         * Creates a plain object from a QuitGameServerReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.QuitGameServerReq
         * @static
         * @param {pb.QuitGameServerReq} message QuitGameServerReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitGameServerReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this QuitGameServerReq to JSON.
         * @function toJSON
         * @memberof pb.QuitGameServerReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitGameServerReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.QuitGameServerReq.DEF
         * @enum {string}
         * @property {number} ID=110 ID value
         */
        QuitGameServerReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[110] = "ID"] = 110;
            return values;
        })();

        return QuitGameServerReq;
    })();

    pb.QuitGameServerResp = (function() {

        /**
         * Properties of a QuitGameServerResp.
         * @memberof pb
         * @interface IQuitGameServerResp
         */

        /**
         * Constructs a new QuitGameServerResp.
         * @memberof pb
         * @classdesc Represents a QuitGameServerResp.
         * @implements IQuitGameServerResp
         * @constructor
         * @param {pb.IQuitGameServerResp=} [properties] Properties to set
         */
        function QuitGameServerResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new QuitGameServerResp instance using the specified properties.
         * @function create
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {pb.IQuitGameServerResp=} [properties] Properties to set
         * @returns {pb.QuitGameServerResp} QuitGameServerResp instance
         */
        QuitGameServerResp.create = function create(properties) {
            return new QuitGameServerResp(properties);
        };

        /**
         * Encodes the specified QuitGameServerResp message. Does not implicitly {@link pb.QuitGameServerResp.verify|verify} messages.
         * @function encode
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {pb.IQuitGameServerResp} message QuitGameServerResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitGameServerResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified QuitGameServerResp message, length delimited. Does not implicitly {@link pb.QuitGameServerResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {pb.IQuitGameServerResp} message QuitGameServerResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitGameServerResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitGameServerResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.QuitGameServerResp} QuitGameServerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitGameServerResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.QuitGameServerResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitGameServerResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.QuitGameServerResp} QuitGameServerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitGameServerResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitGameServerResp message.
         * @function verify
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitGameServerResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a QuitGameServerResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.QuitGameServerResp} QuitGameServerResp
         */
        QuitGameServerResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.QuitGameServerResp)
                return object;
            return new $root.pb.QuitGameServerResp();
        };

        /**
         * Creates a plain object from a QuitGameServerResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.QuitGameServerResp
         * @static
         * @param {pb.QuitGameServerResp} message QuitGameServerResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitGameServerResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this QuitGameServerResp to JSON.
         * @function toJSON
         * @memberof pb.QuitGameServerResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitGameServerResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.QuitGameServerResp.DEF
         * @enum {string}
         * @property {number} ID=111 ID value
         */
        QuitGameServerResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[111] = "ID"] = 111;
            return values;
        })();

        return QuitGameServerResp;
    })();

    pb.OnlineReq = (function() {

        /**
         * Properties of an OnlineReq.
         * @memberof pb
         * @interface IOnlineReq
         * @property {number} uid OnlineReq uid
         * @property {number} accessServiceId OnlineReq accessServiceId
         */

        /**
         * Constructs a new OnlineReq.
         * @memberof pb
         * @classdesc Represents an OnlineReq.
         * @implements IOnlineReq
         * @constructor
         * @param {pb.IOnlineReq=} [properties] Properties to set
         */
        function OnlineReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnlineReq uid.
         * @member {number} uid
         * @memberof pb.OnlineReq
         * @instance
         */
        OnlineReq.prototype.uid = 0;

        /**
         * OnlineReq accessServiceId.
         * @member {number} accessServiceId
         * @memberof pb.OnlineReq
         * @instance
         */
        OnlineReq.prototype.accessServiceId = 0;

        /**
         * Creates a new OnlineReq instance using the specified properties.
         * @function create
         * @memberof pb.OnlineReq
         * @static
         * @param {pb.IOnlineReq=} [properties] Properties to set
         * @returns {pb.OnlineReq} OnlineReq instance
         */
        OnlineReq.create = function create(properties) {
            return new OnlineReq(properties);
        };

        /**
         * Encodes the specified OnlineReq message. Does not implicitly {@link pb.OnlineReq.verify|verify} messages.
         * @function encode
         * @memberof pb.OnlineReq
         * @static
         * @param {pb.IOnlineReq} message OnlineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accessServiceId);
            return writer;
        };

        /**
         * Encodes the specified OnlineReq message, length delimited. Does not implicitly {@link pb.OnlineReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.OnlineReq
         * @static
         * @param {pb.IOnlineReq} message OnlineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnlineReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.OnlineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.OnlineReq} OnlineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.OnlineReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.accessServiceId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("accessServiceId"))
                throw $util.ProtocolError("missing required 'accessServiceId'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnlineReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.OnlineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.OnlineReq} OnlineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnlineReq message.
         * @function verify
         * @memberof pb.OnlineReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnlineReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (!$util.isInteger(message.accessServiceId))
                return "accessServiceId: integer expected";
            return null;
        };

        /**
         * Creates an OnlineReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.OnlineReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.OnlineReq} OnlineReq
         */
        OnlineReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.OnlineReq)
                return object;
            var message = new $root.pb.OnlineReq();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.accessServiceId != null)
                message.accessServiceId = object.accessServiceId | 0;
            return message;
        };

        /**
         * Creates a plain object from an OnlineReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.OnlineReq
         * @static
         * @param {pb.OnlineReq} message OnlineReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnlineReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.accessServiceId = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.accessServiceId != null && message.hasOwnProperty("accessServiceId"))
                object.accessServiceId = message.accessServiceId;
            return object;
        };

        /**
         * Converts this OnlineReq to JSON.
         * @function toJSON
         * @memberof pb.OnlineReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnlineReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.OnlineReq.DEF
         * @enum {string}
         * @property {number} ID=120 ID value
         */
        OnlineReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[120] = "ID"] = 120;
            return values;
        })();

        return OnlineReq;
    })();

    pb.OnlineResp = (function() {

        /**
         * Properties of an OnlineResp.
         * @memberof pb
         * @interface IOnlineResp
         */

        /**
         * Constructs a new OnlineResp.
         * @memberof pb
         * @classdesc Represents an OnlineResp.
         * @implements IOnlineResp
         * @constructor
         * @param {pb.IOnlineResp=} [properties] Properties to set
         */
        function OnlineResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OnlineResp instance using the specified properties.
         * @function create
         * @memberof pb.OnlineResp
         * @static
         * @param {pb.IOnlineResp=} [properties] Properties to set
         * @returns {pb.OnlineResp} OnlineResp instance
         */
        OnlineResp.create = function create(properties) {
            return new OnlineResp(properties);
        };

        /**
         * Encodes the specified OnlineResp message. Does not implicitly {@link pb.OnlineResp.verify|verify} messages.
         * @function encode
         * @memberof pb.OnlineResp
         * @static
         * @param {pb.IOnlineResp} message OnlineResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OnlineResp message, length delimited. Does not implicitly {@link pb.OnlineResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.OnlineResp
         * @static
         * @param {pb.IOnlineResp} message OnlineResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnlineResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.OnlineResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.OnlineResp} OnlineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.OnlineResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnlineResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.OnlineResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.OnlineResp} OnlineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnlineResp message.
         * @function verify
         * @memberof pb.OnlineResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnlineResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an OnlineResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.OnlineResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.OnlineResp} OnlineResp
         */
        OnlineResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.OnlineResp)
                return object;
            return new $root.pb.OnlineResp();
        };

        /**
         * Creates a plain object from an OnlineResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.OnlineResp
         * @static
         * @param {pb.OnlineResp} message OnlineResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnlineResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this OnlineResp to JSON.
         * @function toJSON
         * @memberof pb.OnlineResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnlineResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.OnlineResp.DEF
         * @enum {string}
         * @property {number} ID=121 ID value
         */
        OnlineResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[121] = "ID"] = 121;
            return values;
        })();

        return OnlineResp;
    })();

    pb.OfflineReq = (function() {

        /**
         * Properties of an OfflineReq.
         * @memberof pb
         * @interface IOfflineReq
         * @property {number} uid OfflineReq uid
         */

        /**
         * Constructs a new OfflineReq.
         * @memberof pb
         * @classdesc Represents an OfflineReq.
         * @implements IOfflineReq
         * @constructor
         * @param {pb.IOfflineReq=} [properties] Properties to set
         */
        function OfflineReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfflineReq uid.
         * @member {number} uid
         * @memberof pb.OfflineReq
         * @instance
         */
        OfflineReq.prototype.uid = 0;

        /**
         * Creates a new OfflineReq instance using the specified properties.
         * @function create
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.IOfflineReq=} [properties] Properties to set
         * @returns {pb.OfflineReq} OfflineReq instance
         */
        OfflineReq.create = function create(properties) {
            return new OfflineReq(properties);
        };

        /**
         * Encodes the specified OfflineReq message. Does not implicitly {@link pb.OfflineReq.verify|verify} messages.
         * @function encode
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.IOfflineReq} message OfflineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified OfflineReq message, length delimited. Does not implicitly {@link pb.OfflineReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.IOfflineReq} message OfflineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfflineReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.OfflineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.OfflineReq} OfflineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.OfflineReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            return message;
        };

        /**
         * Decodes an OfflineReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.OfflineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.OfflineReq} OfflineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfflineReq message.
         * @function verify
         * @memberof pb.OfflineReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfflineReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            return null;
        };

        /**
         * Creates an OfflineReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.OfflineReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.OfflineReq} OfflineReq
         */
        OfflineReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.OfflineReq)
                return object;
            var message = new $root.pb.OfflineReq();
            if (object.uid != null)
                message.uid = object.uid | 0;
            return message;
        };

        /**
         * Creates a plain object from an OfflineReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.OfflineReq} message OfflineReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfflineReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this OfflineReq to JSON.
         * @function toJSON
         * @memberof pb.OfflineReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfflineReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.OfflineReq.DEF
         * @enum {string}
         * @property {number} ID=130 ID value
         */
        OfflineReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[130] = "ID"] = 130;
            return values;
        })();

        return OfflineReq;
    })();

    pb.OfflineResp = (function() {

        /**
         * Properties of an OfflineResp.
         * @memberof pb
         * @interface IOfflineResp
         */

        /**
         * Constructs a new OfflineResp.
         * @memberof pb
         * @classdesc Represents an OfflineResp.
         * @implements IOfflineResp
         * @constructor
         * @param {pb.IOfflineResp=} [properties] Properties to set
         */
        function OfflineResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OfflineResp instance using the specified properties.
         * @function create
         * @memberof pb.OfflineResp
         * @static
         * @param {pb.IOfflineResp=} [properties] Properties to set
         * @returns {pb.OfflineResp} OfflineResp instance
         */
        OfflineResp.create = function create(properties) {
            return new OfflineResp(properties);
        };

        /**
         * Encodes the specified OfflineResp message. Does not implicitly {@link pb.OfflineResp.verify|verify} messages.
         * @function encode
         * @memberof pb.OfflineResp
         * @static
         * @param {pb.IOfflineResp} message OfflineResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OfflineResp message, length delimited. Does not implicitly {@link pb.OfflineResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.OfflineResp
         * @static
         * @param {pb.IOfflineResp} message OfflineResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfflineResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.OfflineResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.OfflineResp} OfflineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.OfflineResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfflineResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.OfflineResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.OfflineResp} OfflineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfflineResp message.
         * @function verify
         * @memberof pb.OfflineResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfflineResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an OfflineResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.OfflineResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.OfflineResp} OfflineResp
         */
        OfflineResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.OfflineResp)
                return object;
            return new $root.pb.OfflineResp();
        };

        /**
         * Creates a plain object from an OfflineResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.OfflineResp
         * @static
         * @param {pb.OfflineResp} message OfflineResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfflineResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this OfflineResp to JSON.
         * @function toJSON
         * @memberof pb.OfflineResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfflineResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.OfflineResp.DEF
         * @enum {string}
         * @property {number} ID=131 ID value
         */
        OfflineResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[131] = "ID"] = 131;
            return values;
        })();

        return OfflineResp;
    })();

    pb.CheckUpgradeReq = (function() {

        /**
         * Properties of a CheckUpgradeReq.
         * @memberof pb
         * @interface ICheckUpgradeReq
         * @property {number} version CheckUpgradeReq version
         * @property {string|null} [channel] CheckUpgradeReq channel
         */

        /**
         * Constructs a new CheckUpgradeReq.
         * @memberof pb
         * @classdesc Represents a CheckUpgradeReq.
         * @implements ICheckUpgradeReq
         * @constructor
         * @param {pb.ICheckUpgradeReq=} [properties] Properties to set
         */
        function CheckUpgradeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckUpgradeReq version.
         * @member {number} version
         * @memberof pb.CheckUpgradeReq
         * @instance
         */
        CheckUpgradeReq.prototype.version = 0;

        /**
         * CheckUpgradeReq channel.
         * @member {string} channel
         * @memberof pb.CheckUpgradeReq
         * @instance
         */
        CheckUpgradeReq.prototype.channel = "";

        /**
         * Creates a new CheckUpgradeReq instance using the specified properties.
         * @function create
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {pb.ICheckUpgradeReq=} [properties] Properties to set
         * @returns {pb.CheckUpgradeReq} CheckUpgradeReq instance
         */
        CheckUpgradeReq.create = function create(properties) {
            return new CheckUpgradeReq(properties);
        };

        /**
         * Encodes the specified CheckUpgradeReq message. Does not implicitly {@link pb.CheckUpgradeReq.verify|verify} messages.
         * @function encode
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {pb.ICheckUpgradeReq} message CheckUpgradeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckUpgradeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.channel);
            return writer;
        };

        /**
         * Encodes the specified CheckUpgradeReq message, length delimited. Does not implicitly {@link pb.CheckUpgradeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {pb.ICheckUpgradeReq} message CheckUpgradeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckUpgradeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckUpgradeReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CheckUpgradeReq} CheckUpgradeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckUpgradeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CheckUpgradeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 2:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("version"))
                throw $util.ProtocolError("missing required 'version'", { instance: message });
            return message;
        };

        /**
         * Decodes a CheckUpgradeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CheckUpgradeReq} CheckUpgradeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckUpgradeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckUpgradeReq message.
         * @function verify
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckUpgradeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.version))
                return "version: integer expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            return null;
        };

        /**
         * Creates a CheckUpgradeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CheckUpgradeReq} CheckUpgradeReq
         */
        CheckUpgradeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CheckUpgradeReq)
                return object;
            var message = new $root.pb.CheckUpgradeReq();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.channel != null)
                message.channel = String(object.channel);
            return message;
        };

        /**
         * Creates a plain object from a CheckUpgradeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CheckUpgradeReq
         * @static
         * @param {pb.CheckUpgradeReq} message CheckUpgradeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckUpgradeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.channel = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            return object;
        };

        /**
         * Converts this CheckUpgradeReq to JSON.
         * @function toJSON
         * @memberof pb.CheckUpgradeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckUpgradeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.CheckUpgradeReq.DEF
         * @enum {string}
         * @property {number} ID=150 ID value
         */
        CheckUpgradeReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[150] = "ID"] = 150;
            return values;
        })();

        return CheckUpgradeReq;
    })();

    pb.CheckUpgradeResp = (function() {

        /**
         * Properties of a CheckUpgradeResp.
         * @memberof pb
         * @interface ICheckUpgradeResp
         * @property {number|null} [newVersion] CheckUpgradeResp newVersion
         * @property {string|null} [upgradeInfo] CheckUpgradeResp upgradeInfo
         * @property {boolean|null} [forceClean] CheckUpgradeResp forceClean
         */

        /**
         * Constructs a new CheckUpgradeResp.
         * @memberof pb
         * @classdesc Represents a CheckUpgradeResp.
         * @implements ICheckUpgradeResp
         * @constructor
         * @param {pb.ICheckUpgradeResp=} [properties] Properties to set
         */
        function CheckUpgradeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckUpgradeResp newVersion.
         * @member {number} newVersion
         * @memberof pb.CheckUpgradeResp
         * @instance
         */
        CheckUpgradeResp.prototype.newVersion = 0;

        /**
         * CheckUpgradeResp upgradeInfo.
         * @member {string} upgradeInfo
         * @memberof pb.CheckUpgradeResp
         * @instance
         */
        CheckUpgradeResp.prototype.upgradeInfo = "";

        /**
         * CheckUpgradeResp forceClean.
         * @member {boolean} forceClean
         * @memberof pb.CheckUpgradeResp
         * @instance
         */
        CheckUpgradeResp.prototype.forceClean = false;

        /**
         * Creates a new CheckUpgradeResp instance using the specified properties.
         * @function create
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {pb.ICheckUpgradeResp=} [properties] Properties to set
         * @returns {pb.CheckUpgradeResp} CheckUpgradeResp instance
         */
        CheckUpgradeResp.create = function create(properties) {
            return new CheckUpgradeResp(properties);
        };

        /**
         * Encodes the specified CheckUpgradeResp message. Does not implicitly {@link pb.CheckUpgradeResp.verify|verify} messages.
         * @function encode
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {pb.ICheckUpgradeResp} message CheckUpgradeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckUpgradeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newVersion != null && message.hasOwnProperty("newVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.newVersion);
            if (message.upgradeInfo != null && message.hasOwnProperty("upgradeInfo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.upgradeInfo);
            if (message.forceClean != null && message.hasOwnProperty("forceClean"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.forceClean);
            return writer;
        };

        /**
         * Encodes the specified CheckUpgradeResp message, length delimited. Does not implicitly {@link pb.CheckUpgradeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {pb.ICheckUpgradeResp} message CheckUpgradeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckUpgradeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckUpgradeResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CheckUpgradeResp} CheckUpgradeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckUpgradeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CheckUpgradeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.newVersion = reader.int32();
                    break;
                case 2:
                    message.upgradeInfo = reader.string();
                    break;
                case 3:
                    message.forceClean = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckUpgradeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CheckUpgradeResp} CheckUpgradeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckUpgradeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckUpgradeResp message.
         * @function verify
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckUpgradeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.newVersion != null && message.hasOwnProperty("newVersion"))
                if (!$util.isInteger(message.newVersion))
                    return "newVersion: integer expected";
            if (message.upgradeInfo != null && message.hasOwnProperty("upgradeInfo"))
                if (!$util.isString(message.upgradeInfo))
                    return "upgradeInfo: string expected";
            if (message.forceClean != null && message.hasOwnProperty("forceClean"))
                if (typeof message.forceClean !== "boolean")
                    return "forceClean: boolean expected";
            return null;
        };

        /**
         * Creates a CheckUpgradeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CheckUpgradeResp} CheckUpgradeResp
         */
        CheckUpgradeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CheckUpgradeResp)
                return object;
            var message = new $root.pb.CheckUpgradeResp();
            if (object.newVersion != null)
                message.newVersion = object.newVersion | 0;
            if (object.upgradeInfo != null)
                message.upgradeInfo = String(object.upgradeInfo);
            if (object.forceClean != null)
                message.forceClean = Boolean(object.forceClean);
            return message;
        };

        /**
         * Creates a plain object from a CheckUpgradeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CheckUpgradeResp
         * @static
         * @param {pb.CheckUpgradeResp} message CheckUpgradeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckUpgradeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.newVersion = 0;
                object.upgradeInfo = "";
                object.forceClean = false;
            }
            if (message.newVersion != null && message.hasOwnProperty("newVersion"))
                object.newVersion = message.newVersion;
            if (message.upgradeInfo != null && message.hasOwnProperty("upgradeInfo"))
                object.upgradeInfo = message.upgradeInfo;
            if (message.forceClean != null && message.hasOwnProperty("forceClean"))
                object.forceClean = message.forceClean;
            return object;
        };

        /**
         * Converts this CheckUpgradeResp to JSON.
         * @function toJSON
         * @memberof pb.CheckUpgradeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckUpgradeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.CheckUpgradeResp.DEF
         * @enum {string}
         * @property {number} ID=151 ID value
         */
        CheckUpgradeResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[151] = "ID"] = 151;
            return values;
        })();

        return CheckUpgradeResp;
    })();

    pb.GameResUpgradeReq = (function() {

        /**
         * Properties of a GameResUpgradeReq.
         * @memberof pb
         * @interface IGameResUpgradeReq
         * @property {number} ver GameResUpgradeReq ver
         */

        /**
         * Constructs a new GameResUpgradeReq.
         * @memberof pb
         * @classdesc Represents a GameResUpgradeReq.
         * @implements IGameResUpgradeReq
         * @constructor
         * @param {pb.IGameResUpgradeReq=} [properties] Properties to set
         */
        function GameResUpgradeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResUpgradeReq ver.
         * @member {number} ver
         * @memberof pb.GameResUpgradeReq
         * @instance
         */
        GameResUpgradeReq.prototype.ver = 0;

        /**
         * Creates a new GameResUpgradeReq instance using the specified properties.
         * @function create
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {pb.IGameResUpgradeReq=} [properties] Properties to set
         * @returns {pb.GameResUpgradeReq} GameResUpgradeReq instance
         */
        GameResUpgradeReq.create = function create(properties) {
            return new GameResUpgradeReq(properties);
        };

        /**
         * Encodes the specified GameResUpgradeReq message. Does not implicitly {@link pb.GameResUpgradeReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {pb.IGameResUpgradeReq} message GameResUpgradeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResUpgradeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ver);
            return writer;
        };

        /**
         * Encodes the specified GameResUpgradeReq message, length delimited. Does not implicitly {@link pb.GameResUpgradeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {pb.IGameResUpgradeReq} message GameResUpgradeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResUpgradeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResUpgradeReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameResUpgradeReq} GameResUpgradeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResUpgradeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameResUpgradeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameResUpgradeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameResUpgradeReq} GameResUpgradeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResUpgradeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResUpgradeReq message.
         * @function verify
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResUpgradeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ver))
                return "ver: integer expected";
            return null;
        };

        /**
         * Creates a GameResUpgradeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameResUpgradeReq} GameResUpgradeReq
         */
        GameResUpgradeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameResUpgradeReq)
                return object;
            var message = new $root.pb.GameResUpgradeReq();
            if (object.ver != null)
                message.ver = object.ver | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameResUpgradeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameResUpgradeReq
         * @static
         * @param {pb.GameResUpgradeReq} message GameResUpgradeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResUpgradeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ver = 0;
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            return object;
        };

        /**
         * Converts this GameResUpgradeReq to JSON.
         * @function toJSON
         * @memberof pb.GameResUpgradeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResUpgradeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.GameResUpgradeReq.DEF
         * @enum {string}
         * @property {number} ID=13 ID value
         */
        GameResUpgradeReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[13] = "ID"] = 13;
            return values;
        })();

        return GameResUpgradeReq;
    })();

    pb.GameResUpgradeResp = (function() {

        /**
         * Properties of a GameResUpgradeResp.
         * @memberof pb
         * @interface IGameResUpgradeResp
         * @property {boolean} isUpgrade GameResUpgradeResp isUpgrade
         * @property {string|null} [upgradeUrl] GameResUpgradeResp upgradeUrl
         */

        /**
         * Constructs a new GameResUpgradeResp.
         * @memberof pb
         * @classdesc Represents a GameResUpgradeResp.
         * @implements IGameResUpgradeResp
         * @constructor
         * @param {pb.IGameResUpgradeResp=} [properties] Properties to set
         */
        function GameResUpgradeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResUpgradeResp isUpgrade.
         * @member {boolean} isUpgrade
         * @memberof pb.GameResUpgradeResp
         * @instance
         */
        GameResUpgradeResp.prototype.isUpgrade = false;

        /**
         * GameResUpgradeResp upgradeUrl.
         * @member {string} upgradeUrl
         * @memberof pb.GameResUpgradeResp
         * @instance
         */
        GameResUpgradeResp.prototype.upgradeUrl = "";

        /**
         * Creates a new GameResUpgradeResp instance using the specified properties.
         * @function create
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {pb.IGameResUpgradeResp=} [properties] Properties to set
         * @returns {pb.GameResUpgradeResp} GameResUpgradeResp instance
         */
        GameResUpgradeResp.create = function create(properties) {
            return new GameResUpgradeResp(properties);
        };

        /**
         * Encodes the specified GameResUpgradeResp message. Does not implicitly {@link pb.GameResUpgradeResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {pb.IGameResUpgradeResp} message GameResUpgradeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResUpgradeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isUpgrade);
            if (message.upgradeUrl != null && message.hasOwnProperty("upgradeUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.upgradeUrl);
            return writer;
        };

        /**
         * Encodes the specified GameResUpgradeResp message, length delimited. Does not implicitly {@link pb.GameResUpgradeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {pb.IGameResUpgradeResp} message GameResUpgradeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResUpgradeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResUpgradeResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameResUpgradeResp} GameResUpgradeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResUpgradeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameResUpgradeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isUpgrade = reader.bool();
                    break;
                case 2:
                    message.upgradeUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("isUpgrade"))
                throw $util.ProtocolError("missing required 'isUpgrade'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameResUpgradeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameResUpgradeResp} GameResUpgradeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResUpgradeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResUpgradeResp message.
         * @function verify
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResUpgradeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.isUpgrade !== "boolean")
                return "isUpgrade: boolean expected";
            if (message.upgradeUrl != null && message.hasOwnProperty("upgradeUrl"))
                if (!$util.isString(message.upgradeUrl))
                    return "upgradeUrl: string expected";
            return null;
        };

        /**
         * Creates a GameResUpgradeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameResUpgradeResp} GameResUpgradeResp
         */
        GameResUpgradeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameResUpgradeResp)
                return object;
            var message = new $root.pb.GameResUpgradeResp();
            if (object.isUpgrade != null)
                message.isUpgrade = Boolean(object.isUpgrade);
            if (object.upgradeUrl != null)
                message.upgradeUrl = String(object.upgradeUrl);
            return message;
        };

        /**
         * Creates a plain object from a GameResUpgradeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameResUpgradeResp
         * @static
         * @param {pb.GameResUpgradeResp} message GameResUpgradeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResUpgradeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isUpgrade = false;
                object.upgradeUrl = "";
            }
            if (message.isUpgrade != null && message.hasOwnProperty("isUpgrade"))
                object.isUpgrade = message.isUpgrade;
            if (message.upgradeUrl != null && message.hasOwnProperty("upgradeUrl"))
                object.upgradeUrl = message.upgradeUrl;
            return object;
        };

        /**
         * Converts this GameResUpgradeResp to JSON.
         * @function toJSON
         * @memberof pb.GameResUpgradeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResUpgradeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.GameResUpgradeResp.DEF
         * @enum {string}
         * @property {number} ID=14 ID value
         */
        GameResUpgradeResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[14] = "ID"] = 14;
            return values;
        })();

        return GameResUpgradeResp;
    })();

    pb.LogoutReq = (function() {

        /**
         * Properties of a LogoutReq.
         * @memberof pb
         * @interface ILogoutReq
         */

        /**
         * Constructs a new LogoutReq.
         * @memberof pb
         * @classdesc Represents a LogoutReq.
         * @implements ILogoutReq
         * @constructor
         * @param {pb.ILogoutReq=} [properties] Properties to set
         */
        function LogoutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LogoutReq instance using the specified properties.
         * @function create
         * @memberof pb.LogoutReq
         * @static
         * @param {pb.ILogoutReq=} [properties] Properties to set
         * @returns {pb.LogoutReq} LogoutReq instance
         */
        LogoutReq.create = function create(properties) {
            return new LogoutReq(properties);
        };

        /**
         * Encodes the specified LogoutReq message. Does not implicitly {@link pb.LogoutReq.verify|verify} messages.
         * @function encode
         * @memberof pb.LogoutReq
         * @static
         * @param {pb.ILogoutReq} message LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LogoutReq message, length delimited. Does not implicitly {@link pb.LogoutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LogoutReq
         * @static
         * @param {pb.ILogoutReq} message LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LogoutReq} LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LogoutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LogoutReq} LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutReq message.
         * @function verify
         * @memberof pb.LogoutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LogoutReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LogoutReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LogoutReq} LogoutReq
         */
        LogoutReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LogoutReq)
                return object;
            return new $root.pb.LogoutReq();
        };

        /**
         * Creates a plain object from a LogoutReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LogoutReq
         * @static
         * @param {pb.LogoutReq} message LogoutReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogoutReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LogoutReq to JSON.
         * @function toJSON
         * @memberof pb.LogoutReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.LogoutReq.DEF
         * @enum {string}
         * @property {number} ID=5 ID value
         */
        LogoutReq.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5] = "ID"] = 5;
            return values;
        })();

        return LogoutReq;
    })();

    pb.LogoutResp = (function() {

        /**
         * Properties of a LogoutResp.
         * @memberof pb
         * @interface ILogoutResp
         */

        /**
         * Constructs a new LogoutResp.
         * @memberof pb
         * @classdesc Represents a LogoutResp.
         * @implements ILogoutResp
         * @constructor
         * @param {pb.ILogoutResp=} [properties] Properties to set
         */
        function LogoutResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LogoutResp instance using the specified properties.
         * @function create
         * @memberof pb.LogoutResp
         * @static
         * @param {pb.ILogoutResp=} [properties] Properties to set
         * @returns {pb.LogoutResp} LogoutResp instance
         */
        LogoutResp.create = function create(properties) {
            return new LogoutResp(properties);
        };

        /**
         * Encodes the specified LogoutResp message. Does not implicitly {@link pb.LogoutResp.verify|verify} messages.
         * @function encode
         * @memberof pb.LogoutResp
         * @static
         * @param {pb.ILogoutResp} message LogoutResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LogoutResp message, length delimited. Does not implicitly {@link pb.LogoutResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LogoutResp
         * @static
         * @param {pb.ILogoutResp} message LogoutResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LogoutResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LogoutResp} LogoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LogoutResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LogoutResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LogoutResp} LogoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutResp message.
         * @function verify
         * @memberof pb.LogoutResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LogoutResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LogoutResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LogoutResp} LogoutResp
         */
        LogoutResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LogoutResp)
                return object;
            return new $root.pb.LogoutResp();
        };

        /**
         * Creates a plain object from a LogoutResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LogoutResp
         * @static
         * @param {pb.LogoutResp} message LogoutResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogoutResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LogoutResp to JSON.
         * @function toJSON
         * @memberof pb.LogoutResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DEF enum.
         * @name pb.LogoutResp.DEF
         * @enum {string}
         * @property {number} ID=6 ID value
         */
        LogoutResp.DEF = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6] = "ID"] = 6;
            return values;
        })();

        return LogoutResp;
    })();

    /**
     * EnumType enum.
     * @name pb.EnumType
     * @enum {string}
     * @property {number} E_SYSTEM_READY=100 E_SYSTEM_READY value
     */
    pb.EnumType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[100] = "E_SYSTEM_READY"] = 100;
        return values;
    })();

    pb.Mapping = (function() {

        /**
         * Properties of a Mapping.
         * @memberof pb
         * @interface IMapping
         * @property {pb.ILoginReq|null} [".pb.loginReq"] Mapping .pb.loginReq
         * @property {pb.ILoginResp|null} [".pb.loginResp"] Mapping .pb.loginResp
         * @property {pb.IConnectGameServerReq|null} [".pb.connectGameServerReq"] Mapping .pb.connectGameServerReq
         */

        /**
         * Constructs a new Mapping.
         * @memberof pb
         * @classdesc Represents a Mapping.
         * @implements IMapping
         * @constructor
         * @param {pb.IMapping=} [properties] Properties to set
         */
        function Mapping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mapping .pb.loginReq.
         * @member {pb.ILoginReq|null|undefined} .pb.loginReq
         * @memberof pb.Mapping
         * @instance
         */
        Mapping.prototype[".pb.loginReq"] = null;

        /**
         * Mapping .pb.loginResp.
         * @member {pb.ILoginResp|null|undefined} .pb.loginResp
         * @memberof pb.Mapping
         * @instance
         */
        Mapping.prototype[".pb.loginResp"] = null;

        /**
         * Mapping .pb.connectGameServerReq.
         * @member {pb.IConnectGameServerReq|null|undefined} .pb.connectGameServerReq
         * @memberof pb.Mapping
         * @instance
         */
        Mapping.prototype[".pb.connectGameServerReq"] = null;

        /**
         * Creates a new Mapping instance using the specified properties.
         * @function create
         * @memberof pb.Mapping
         * @static
         * @param {pb.IMapping=} [properties] Properties to set
         * @returns {pb.Mapping} Mapping instance
         */
        Mapping.create = function create(properties) {
            return new Mapping(properties);
        };

        /**
         * Encodes the specified Mapping message. Does not implicitly {@link pb.Mapping.verify|verify} messages.
         * @function encode
         * @memberof pb.Mapping
         * @static
         * @param {pb.IMapping} message Mapping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mapping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message[".pb.loginReq"] != null && message.hasOwnProperty(".pb.loginReq"))
                $root.pb.LoginReq.encode(message[".pb.loginReq"], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message[".pb.loginResp"] != null && message.hasOwnProperty(".pb.loginResp"))
                $root.pb.LoginResp.encode(message[".pb.loginResp"], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message[".pb.connectGameServerReq"] != null && message.hasOwnProperty(".pb.connectGameServerReq"))
                $root.pb.ConnectGameServerReq.encode(message[".pb.connectGameServerReq"], writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Mapping message, length delimited. Does not implicitly {@link pb.Mapping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Mapping
         * @static
         * @param {pb.IMapping} message Mapping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mapping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Mapping message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Mapping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Mapping} Mapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mapping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Mapping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message[".pb.loginReq"] = $root.pb.LoginReq.decode(reader, reader.uint32());
                    break;
                case 2:
                    message[".pb.loginResp"] = $root.pb.LoginResp.decode(reader, reader.uint32());
                    break;
                case 40:
                    message[".pb.connectGameServerReq"] = $root.pb.ConnectGameServerReq.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Mapping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Mapping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Mapping} Mapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mapping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Mapping message.
         * @function verify
         * @memberof pb.Mapping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mapping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message[".pb.loginReq"] != null && message.hasOwnProperty(".pb.loginReq")) {
                var error = $root.pb.LoginReq.verify(message[".pb.loginReq"]);
                if (error)
                    return ".pb.loginReq." + error;
            }
            if (message[".pb.loginResp"] != null && message.hasOwnProperty(".pb.loginResp")) {
                var error = $root.pb.LoginResp.verify(message[".pb.loginResp"]);
                if (error)
                    return ".pb.loginResp." + error;
            }
            if (message[".pb.connectGameServerReq"] != null && message.hasOwnProperty(".pb.connectGameServerReq")) {
                var error = $root.pb.ConnectGameServerReq.verify(message[".pb.connectGameServerReq"]);
                if (error)
                    return ".pb.connectGameServerReq." + error;
            }
            return null;
        };

        /**
         * Creates a Mapping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Mapping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Mapping} Mapping
         */
        Mapping.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Mapping)
                return object;
            var message = new $root.pb.Mapping();
            if (object[".pb.loginReq"] != null) {
                if (typeof object[".pb.loginReq"] !== "object")
                    throw TypeError(".pb.Mapping..pb.loginReq: object expected");
                message[".pb.loginReq"] = $root.pb.LoginReq.fromObject(object[".pb.loginReq"]);
            }
            if (object[".pb.loginResp"] != null) {
                if (typeof object[".pb.loginResp"] !== "object")
                    throw TypeError(".pb.Mapping..pb.loginResp: object expected");
                message[".pb.loginResp"] = $root.pb.LoginResp.fromObject(object[".pb.loginResp"]);
            }
            if (object[".pb.connectGameServerReq"] != null) {
                if (typeof object[".pb.connectGameServerReq"] !== "object")
                    throw TypeError(".pb.Mapping..pb.connectGameServerReq: object expected");
                message[".pb.connectGameServerReq"] = $root.pb.ConnectGameServerReq.fromObject(object[".pb.connectGameServerReq"]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Mapping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Mapping
         * @static
         * @param {pb.Mapping} message Mapping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mapping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object[".pb.loginReq"] = null;
                object[".pb.loginResp"] = null;
                object[".pb.connectGameServerReq"] = null;
            }
            if (message[".pb.loginReq"] != null && message.hasOwnProperty(".pb.loginReq"))
                object[".pb.loginReq"] = $root.pb.LoginReq.toObject(message[".pb.loginReq"], options);
            if (message[".pb.loginResp"] != null && message.hasOwnProperty(".pb.loginResp"))
                object[".pb.loginResp"] = $root.pb.LoginResp.toObject(message[".pb.loginResp"], options);
            if (message[".pb.connectGameServerReq"] != null && message.hasOwnProperty(".pb.connectGameServerReq"))
                object[".pb.connectGameServerReq"] = $root.pb.ConnectGameServerReq.toObject(message[".pb.connectGameServerReq"], options);
            return object;
        };

        /**
         * Converts this Mapping to JSON.
         * @function toJSON
         * @memberof pb.Mapping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mapping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Mapping;
    })();

    return pb;
})();

module.exports = $root;

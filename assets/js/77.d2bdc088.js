(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{384:function(e,t,a){"use strict";a.r(t);var r=a(18),n=function(e){e.options.__data__block__={mermaid_64a56f2c:"sequenceDiagram\n  participant versioning as ckanext-versioning\n  participant fcm as frictionless_ckan_mapper\n  participant browser as Javascript SDK\n  participant gitserver as metastore-lib\n  participant Authz as ckanext-authz-service\n  participant giftless as giftless\n  participant storage as ckanext-external-storage </br> (Direct to Cloud Upload)\n  participant MetaStore as CKAN MetaStore\n  versioning->>MetaStore: Create Dataset (draft)\n  versioning->>fcm: data to frictionless format\n  fcm->>versioning: datapackage.json\n  versioning->>gitserver: Create dataset repository\n  versioning->>gitserver: Commit datapackage.json\n  versioning->>versioning: Select files to upload\n  versioning->>browser: Push files\n  browser->>browser: calculate file hashes\n  browser->>Authz: auth/authorization\n  Authz->>Authz: check authorization\n  Authz->>browser: JWT token\n  browser->>giftless: batch(upload, token, org, repo, file hashes, file sizes)\n  giftless->>giftless: validate JWT\n  giftless->>browser: batch upload response (signed upload URLs, verify URLs incl JWT)\n  browser->>storage: Upload file1.csv\n  browser->>giftless: Verify file1.csv\n  giftless->>browser: File OK\n  browser->>storage: Upload file2.csv\n  browser->>giftless: Verify file2.csv\n  giftless->>browser: File OK\n  browser->>versioning: Push Files OK\n  versioning->>gitserver: update_dataset(datapackage.json, file1.csv pointer, file2.csv pointer, ...)\n  versioning->>MetaStore: update_dataset\n  MetaStore->>versioning: OK\n"}},i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("# Versioning - Technical Overview")]),e._v(" "),a("blockquote",[a("p",[e._v("This is technical, developer oriented overview of the next gen versioning project implemented in 2020.")])]),e._v(" "),a("p",[a("strong",[e._v("Storage:")]),e._v(" We offer an approach to data storage that leverages cloud blob storage directly (i.e.: without having to upload and serve all files via the CKAN web server), unlocking the performance characteristics of the storage backend directly. More info: "),a("a",{attrs:{href:"http://tech.datopian.com/blob-storage/#direct-to-cloud-upload",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://tech.datopian.com/blob-storage/#direct-to-cloud-upload"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[e._v("Versioning:")]),e._v(" We offer an approach to data versioning that is integrated with CKAN, but does not implement large amounts of custom logic in order to achieve versioning, and instead, leverages git, the world’s most popular software for versioning, for this purpose.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("h3",{attrs:{id:"working-areas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-areas"}},[e._v("#")]),e._v(" Working areas")]),e._v(" "),a("ol",[a("li",[e._v("Data Versioning (Git Server + Git LFS Server)")]),e._v(" "),a("li",[e._v("Cloud Storage (Direct to Cloud Upload)")]),e._v(" "),a("li",[e._v("CKAN Integration (CKAN extensions to call APIs)")])]),e._v(" "),a("h2",{attrs:{id:"main-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-architecture"}},[e._v("#")]),e._v(" Main Architecture")]),e._v(" "),a("h3",{attrs:{id:"ckan-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ckan-extensions"}},[e._v("#")]),e._v(" CKAN Extensions")]),e._v(" "),a("p",[e._v("The solution has the following components:")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/datopian/ckanext-external-storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("ckanext-external-storage"),a("OutboundLink")],1)]),e._v(": This extension will integrate the javascript sdk with CKAN.")]),e._v(" "),a("ul",[a("li",[e._v("Update resources form to upload files to the cloudstorage provider using the new Javascript SDK.")]),e._v(" "),a("li",[e._v("Update all the download points in CKAN to download the resources from the cloudstorage")]),e._v(" "),a("li",[e._v("Integrate "),a("a",{attrs:{href:"https://github.com/datopian/datapub",target:"_blank",rel:"noopener noreferrer"}},[e._v("datapub"),a("OutboundLink")],1),e._v(" for data publishing flows")])]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/datopian/ckanext-authz-service",target:"_blank",rel:"noopener noreferrer"}},[e._v("ckanext-authz-service"),a("OutboundLink")],1),e._v(":")]),e._v(" This extension uses CKAN’s built-in authentication and authorization capabilities to:")]),e._v(" "),a("ul",[a("li",[e._v("Generate JWT tokens and provide them via CKAN’s Web API to clients.")]),e._v(" "),a("li",[e._v("Validate JWT tokens")])]),e._v(" "),a("p",[e._v("This extension requires a RSA keypair for RS* signing & encryption.")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/datopian/ckanext-versioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("ckanext-versioning"),a("OutboundLink")],1)]),e._v(": This CKAN extension adds a full data versioning capability to CKAN including:")]),e._v(" "),a("ul",[a("li",[e._v("Metadata and data is revisioned so that all updates create new revision and old versions of the metadata and data are accessible")]),e._v(" "),a("li",[e._v("Create and manage “revision tags” (named labels plus a description for a specific revision of a dataset e.g. “v1.0”)")]),e._v(" "),a("li",[e._v("Diffs, reverting, etc")])]),e._v(" "),a("h3",{attrs:{id:"giftless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#giftless"}},[e._v("#")]),e._v(" Giftless")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/datopian/giftless",target:"_blank",rel:"noopener noreferrer"}},[e._v("giftless"),a("OutboundLink")],1),e._v(":")]),e._v(" Giftless is just a middleware service to get the location (URLs) of the files in the storage server so clients can interact with them through HTTP requests.")]),e._v(" "),a("ul",[a("li",[e._v("Given the sha256 and the filesize of a data file, the call to giftless it will return the signed URLs so the client (ckanext-external-storage) can do a dummy HTTP PUT request to upload and to verify the content")]),e._v(" "),a("li",[e._v("Validate the JWT token given by ckanext-authz-service")])]),e._v(" "),a("p",[e._v("Note: Giftless will require in it’s configuration access to the public key created for ckanext-authz-service.")]),e._v(" "),a("h3",{attrs:{id:"main-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-libraries"}},[e._v("#")]),e._v(" Main libraries")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/datopian/ckan-client-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript SDK"),a("OutboundLink")],1),e._v(":")]),e._v(" This javascript SDK will contain the logic to be used in the browser to:")]),e._v(" "),a("ul",[a("li",[e._v("calculate file hashes,")]),e._v(" "),a("li",[e._v("get the authorization JWT from ckanext-authz-service")]),e._v(" "),a("li",[e._v("get signed urls from git lfs server (giftless)")]),e._v(" "),a("li",[e._v("upload the file to the cloud storage provider. (Basic HTTP PUT request to the signed url)")]),e._v(" "),a("li",[e._v("Verify the file. (HTTP GET request to the verify URL)")])]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/datopian/metastore-lib/",target:"_blank",rel:"noopener noreferrer"}},[e._v("metastore-lib"),a("OutboundLink")],1)]),e._v(": Library for storing dataset metadata, with versioning support and pluggable backends including GitHub.")]),e._v(" "),a("p",[e._v("metastore-lib is used by ckanext-versioning and requires environment variables related to the Github Repository where the data is gonna be stored and the access token.")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-ckan-mapper",target:"_blank",rel:"noopener noreferrer"}},[e._v("frictionless-ckan-mapper (python)"),a("OutboundLink")],1)]),e._v(": A library for mapping CKAN metadata <=> Frictionless metadata.")]),e._v(" "),a("h3",{attrs:{id:"main-interaction-between-main-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-interaction-between-main-components"}},[e._v("#")]),e._v(" Main interaction between main components")]),e._v(" "),a("p",[e._v("This is a workflow example to understand how each component interacts with each other.")]),e._v(" "),a("p",[a("img",{attrs:{src:"figs/versioning-sequence-diagram.png?raw=true",alt:""}})]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a56f2c",graph:e.$dataBlock.mermaid_64a56f2c}}),a("p",[e._v("Note: I keep this mermaid code for versioning purposes")]),e._v(" "),a("h2",{attrs:{id:"main-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-configurations"}},[e._v("#")]),e._v(" Main Configurations")]),e._v(" "),a("h3",{attrs:{id:"ckan-configs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ckan-configs"}},[e._v("#")]),e._v(" CKAN configs")]),e._v(" "),a("p",[e._v("CKAN extensions configs are described as usual in the "),a("code",[e._v("production.ini")]),e._v(" file and the template to create it in our current deployment pipeline can be found in the "),a("a",{attrs:{href:"https://github.com/gatesfoundation/ckan/blob/develop/contrib/cco/ckan-conf-templates/values.yaml.template",target:"_blank",rel:"noopener noreferrer"}},[e._v("values.yaml.template"),a("OutboundLink")],1),e._v(" file")]),e._v(" "),a("p",[e._v("The specific configs for the versioning stack feature are:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# ckanext-external-storage\nckanext.external_storage.storage_service_url=https://{{CKAN_INSTANCE_NAME}}.gatesfoundation.org/giftless\n# ckanext-authz-service\nckanext.authz_service.jwt_algorithm=RS256\nckanext.authz_service.jwt_private_key_file=/etc/ssh/jwt-rs256.key\nckanext.authz_service.jwt_public_key_file=/etc/ssh/jwt-rs256.key.pub\nckanext.authz_service.jwt_include_user_email=true\n#ckanext-versioning\nckanext.versioning.backend_type=github\nckanext.versioning.backend_config={"github_options": {"login_or_token": "{{GITHUB_PERSONAL_TOKEN}}"}, "default_owner": "{{GITHUB_DEFAULT_OWNER}}", "lfs_server_url": "https://{{CKAN_INSTANCE_NAME}}.gatesfoundation.org/giftless", "private": True}\n')])])]),a("h3",{attrs:{id:"ckan-cloud-helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ckan-cloud-helm"}},[e._v("#")]),e._v(" ckan-cloud-helm")]),e._v(" "),a("p",[e._v("The CKAN architecture is deployed using K8s and Helm charts: "),a("a",{attrs:{href:"https://github.com/datopian/ckan-cloud-helm",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/datopian/ckan-cloud-helm"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[e._v("Giftless")]),e._v(" needs a server of it’s own so it is managed by K8s, the configs can be found in the "),a("a",{attrs:{href:"https://github.com/datopian/ckan-cloud-helm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ckan-cloud-helm"),a("OutboundLink")],1),e._v(" repository and it is currently configured "),a("a",{attrs:{href:"https://github.com/datopian/giftless#azure-support",target:"_blank",rel:"noopener noreferrer"}},[e._v("for Azure"),a("OutboundLink")],1),e._v(" in ckan-cloud-helm repository.")]),e._v(" "),a("p",[e._v("Example of the config map we are using at the moment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('AUTH_PROVIDERS:\n  - factory: giftless.auth.jwt:factory\n    options:\n      algorithm: RS256\n      public_key_file: /etc/ssh/jwt-rs256.key.pub\nTRANSFER_ADAPTERS:\n  basic:\n    factory: giftless.transfer.basic_external:factory\n    options:\n      storage_class: giftless.storage.azure:AzureBlobsStorage\n      storage_options:\n        connection_string: {{ .Values.excternalStorageConnectionString }}\n        container_name: {{ .Values.excternalStorageContainerName }}\n        path_prefix: {{ .Values.giftlessPathPrefix | default "giftless" | quote }}\nPRE_AUTHORIZED_ACTION_PROVIDER:\n  options:\n    private_key: {{ randAlphaNum 16 | b64enc | quote }}\nMIDDLEWARE:\n  - class: werkzeug.middleware.proxy_fix:ProxyFix\n    kwargs:\n      x_host: 1\n      x_port: 1\n      x_prefix: 1\n')])])])],1)}),[],!1,null,null,null);"function"==typeof n&&n(i);t.default=i.exports}}]);
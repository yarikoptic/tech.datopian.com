(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{454:function(t,e,a){"use strict";a.r(e);var i=a(25),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"giftless-the-git-lfs-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#giftless-the-git-lfs-server"}},[t._v("#")]),t._v(" Giftless - the GIT LFS server")]),t._v(" "),a("p",[t._v("Context:")]),t._v(" "),a("ul",[a("li",[t._v("Need: direct to (cloud) storage uploading (and download) including from client => you need a service that will issue tokens to upload direct to storage – what we term a “Storage Access Gateway” =>The Git LFS server protocol actually provides this with its "),a("code",[t._v("batch")]),t._v(" API. Rather than reinventing the wheel let’s use this existing protocol.")]),t._v(" "),a("li",[t._v("Need: git is already widespread and heavily used by data scientists and data engineers. However, git does not support large files well whilst data work often involves large files. Git LFS is the protocol designed to support large file storage stored outside of git blobstore. If we have our own git lfs server then we can integrate any storage we want with git.")])]),t._v(" "),a("p",[t._v("Thus, we arrived at a need for for a standalone Git LFS server (standalone in contrast to the existing git lfs servers provided as an integrated part of existing git hosting providers such as github or gitlab). We also wanted to be able to customize it so it could be backed onto any major cloud storage backend (e.g. S3, GCS, Azure etc). We also had a preference for Python.")]),t._v(" "),a("p",[t._v("We looked around at the existing "),a("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/wiki/Implementations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git LFS server implementations"),a("OutboundLink")],1),t._v(" and couldn’t find one that looked suit to our needs: there were only a few standalone servers, only one in Python, and those that did exist were usually quite out of date and supported old versions of the LFS protocol (see appendix below for further details).")]),t._v(" "),a("h2",{attrs:{id:"summary-of-git-lfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary-of-git-lfs"}},[t._v("#")]),t._v(" Summary of Git LFS")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/blob/master/docs/api/batch.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/blob/master/docs/api/batch.md"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("TODO: sequence diagram of git interaction with gif lfs server")]),t._v(" "),a("li",[t._v("TODO: summary of server API")])]),t._v(" "),a("h2",{attrs:{id:"mapping-to-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping-to-storage"}},[t._v("#")]),t._v(" Mapping to storage")]),t._v(" "),a("p",[t._v("One important question when using")]),t._v(" "),a("p",[t._v("Because of the origins of Git LFS with git hosting there is a convention that")]),t._v(" "),a("h2",{attrs:{id:"authentication-and-authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-and-authorization"}},[t._v("#")]),t._v(" Authentication and Authorization")]),t._v(" "),a("h2",{attrs:{id:"use-with-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-with-git"}},[t._v("#")]),t._v(" Use with git")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/git-lfs/git-lfs/blob/master/docs/api/server-discovery.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-lfs/git-lfs/blob/master/docs/api/server-discovery.md"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Set "),a("code",[t._v(".lfsconfig")])]),t._v(" "),a("h2",{attrs:{id:"appendix-existing-git-lfs-server-implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-existing-git-lfs-server-implementations"}},[t._v("#")]),t._v(" Appendix: Existing Git LFS server implementations")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/kzwang/node-git-lfs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kzwang/node-git-lfs"),a("OutboundLink")],1),t._v(" Node, well developed but now archived and last updated 5y ago. This implementation provided inspiration for giftless.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mgax/lfs:",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mgax/lfs:"),a("OutboundLink")],1),t._v(" Python, only speaks legacy v1 API and last updated properly ~2y ago")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/meltingice/git-lfs-s3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/meltingice/git-lfs-s3"),a("OutboundLink")],1),t._v(" - Ruby, repo is archived. Last updated 6y ago.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);
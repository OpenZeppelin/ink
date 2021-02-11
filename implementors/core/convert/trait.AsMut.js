(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ink_env/struct.Hash.html\" title=\"struct ink_env::Hash\">Hash</a>","synthetic":false,"types":["ink_env::types::Hash"]}];
implementors["ink_storage"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_storage/alloc/struct.Box.html\" title=\"struct ink_storage::alloc::Box\">StorageBox</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.SpreadLayout.html\" title=\"trait ink_storage::traits::SpreadLayout\">SpreadLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::alloc::boxed::Box"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_storage/struct.Lazy.html\" title=\"struct ink_storage::Lazy\">Lazy</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.SpreadLayout.html\" title=\"trait ink_storage::traits::SpreadLayout\">SpreadLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::lazy::Lazy"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_storage/struct.Memory.html\" title=\"struct ink_storage::Memory\">Memory</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.SpreadLayout.html\" title=\"trait ink_storage::traits::SpreadLayout\">SpreadLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::memory::Memory"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_storage/struct.Pack.html\" title=\"struct ink_storage::Pack\">Pack</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::pack::Pack"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
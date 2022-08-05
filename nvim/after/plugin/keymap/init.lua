local Remap = require("config.keymap")
local Leap = require("config.leap")
local nnoremap = Remap.nnoremap
local vnoremap = Remap.vnoremap
local inoremap = Remap.inoremap
local xnoremap = Remap.xnoremap
local nmap = Remap.nmap
local silent = { silent = true }

require("leap").set_default_keymaps()

-- triggers
nnoremap("<leader>tn", "<cmd>Ex<CR>")
nnoremap("<leader>tu", ":UndotreeShow<CR>")

-- Leap remmappings
nnoremap("<leader>k", function()
    Leap.leap_lines_up()
end)
vnoremap("<leader>k", function()
    Leap.leap_lines_up()
end)
nnoremap("<leader>j", function()
    Leap.leap_lines_down()
end)
vnoremap("<leader>j", function()
    Leap.leap_lines_down()
end)

-- Telescope
nnoremap("<leader>ff", function()
    require("telescope.builtin").find_files()
end)
nnoremap("<leader>fp", function()
    require("telescope.builtin").buffers()
end)
nnoremap("<leader>fs", function()
    require("telescope.builtin").live_grep()
end)
nnoremap("<leader>fb", function()
  require("telescope").extensions.file_browser.file_browser()
end)

-- navigation
nnoremap("<leader>'", ":e#<CR>", silent)

-- twilight + zen
nnoremap("<leader>et", ":Twilight<CR>", silent)
nnoremap("<leader>;", ":TZFocus<CR>", silent)
nnoremap("<leader>ez", ":TZAtaraxis<CR>", silent)

-- coc
vim.keymap.set('n', 'gd', '<Plug>(coc-definition)', silent)
vim.keymap.set('n', 'gi', '<Plug>(coc-implementation)', silent)
vim.keymap.set('n', 'gt', '<Plug>(coc-type-definition)', silent)
vim.keymap.set('n', 'gh', ':call CocActionAsync("doHover")<CR>', silent)
vim.keymap.set('n', '<leader>d', ':call CocAction("jumpDefinition", v:false)<CR>', silent)
vim.keymap.set('n', '<leader>t', ':call CocAction("jumpTypeDefinition", v:false)<CR>', silent)
nnoremap("gr", ":Telescope coc references<CR>")
nnoremap("<leader>td", ":Telescope coc diagnostics<CR>")

vim.cmd([[
    inoremap <silent><expr> <CR> coc#pum#visible() ? coc#pum#confirm() : "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"
    inoremap <silent><expr> <TAB> coc#pum#visible() ? coc#pum#confirm() : "<TAB>"
    
    function! CheckBackspace() abort
      let col = col('.') - 1
      return !col || getline('.')[col - 1]  =~# '\s'
    endfunction
]])

-- harpoon
nnoremap("<leader>a", function() require("harpoon.mark").add_file() end, silent)
nnoremap("<leader>h", function() require("harpoon.ui").toggle_quick_menu() end, silent)
nnoremap("<leader>tc", function() require("harpoon.cmd-ui").toggle_quick_menu() end, silent)

nnoremap("<C-e>", function() require("harpoon.ui").nav_file(1) end, silent)
nnoremap("<C-s>", function() require("harpoon.ui").nav_file(2) end, silent)
nnoremap("<C-t>", function() require("harpoon.ui").nav_file(3) end, silent)
nnoremap("<C-b>", function() require("harpoon.ui").nav_file(4) end, silent)

package com.gg_trivia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping(path="/api/categories")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping
    public @ResponseBody CategoryModel addNewCategories (@RequestBody CategoryRequest newCategory) {

        CategoryModel n = new CategoryModel();
        n.setCategory(newCategory.getCategory());

        CategoryModel retCat = categoryRepository.save(n);
        return retCat;
    }

    @GetMapping
    public @ResponseBody Iterable<CategoryModel> getAllCategories() {
        return categoryRepository.findAll();
    }

    @DeleteMapping(path="/{id}")
    public @ResponseBody String deleteCategory (@PathVariable("id") Integer id) {

        categoryRepository.deleteById(id);
        return "category successfully deleted";
    }

    @DeleteMapping(path="")
    public @ResponseBody String deleteCategories () {

        categoryRepository.deleteAll();
        return "all categories successfully deleted";
    }

}
